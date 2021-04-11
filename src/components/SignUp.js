import React, { useState, useRef, useEffect } from "react";
import axios from "../axios.js";
var querystring = require("querystring");

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setUsername(username);
    setPassword(password);
    console.log(`${username} / ${password}`);
    const userData = {
      username: `${username}`,
      password: `${password}`,
      id: "",
      timestamp: "",
    };
    async function insertData() {
      const reqPost = await axios.post("/addUser", userData);
    }
    insertData();
  };

  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-2xl py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Log in to Chat IO
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="font-bold text-grey-darker block mb-2 float-left"
            >
              Username:
            </label>

            <input
              id="username"
              type="text"
              value={username}
              placeholder="Your Username"
              onChange={(e) => setUsername(e.target.value)}
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              ref={inputEl}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="font-bold text-grey-darker block mb-2 float-left"
            >
              Password:
            </label>

            <input
              id="password"
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            />
          </div>
          <a
            className="no-underline inline-block align-baseline font-bold text-sm text-blue hover:text-blue-dark"
            href="#"
          >
            Forgot Password?
          </a>
          <div className="flex justify-center items-center mt-6">
            <button
              type="submit"
              value="Submit"
              className="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center py-4">
          <p className="text-grey-dark text-sm">
            Don't have an account?{" "}
            <a href="#" className="no-underline text-blue font-bold">
              Create an Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
