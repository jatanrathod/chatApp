import express from "express";
import mongoose from "mongoose";
import { mongoConnection } from "./bin/secrets.js";
import Users from "./models/dbUsers.js";
import Cors from "cors";

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_uri = mongoConnection;

//Middleware
app.use(express.json());
app.use(Cors());

//DB config
mongoose.connect(connection_uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("Server is up and Running Successfully!!");
});

app.post("/addUser", (req, res) => {
  const dbUser = req.body;
  Users.create(dbUser, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/user/:userId", (req, res) => {
  Users.find({ username: req.params.userId }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listner
app.listen(port, () => console.log(`listning on localhost: ${port}`));
