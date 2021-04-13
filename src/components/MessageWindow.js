import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { SvgIcon, IconButton, Input } from "@material-ui/core";

function MessageWindow() {
  const fromCss = `bg-gray-300 w-auto mx-4 my-2 p-2 rounded-lg clearfix table`;
  const toCss = `bg-green-300 float-right w-auto mx-4 my-2 p-2 rounded-lg clearfix table`;

  return (
    <div className="overscroll-none w-screen">
      {/* Chat Header */}
      <div className="inline-flex sticky">
        <IconButton>
          <SvgIcon style={{ fontSize: 40 }}>
            <AccountCircleIcon />
          </SvgIcon>
        </IconButton>
        <p className="text-2xl font-bold px-10">Savan Rathod</p>
      </div>

      {/* Load Messages */}
      {/* <!-- MESSAGES --> */}
      <div className="mt-10 mb-16 ">
        {/* <!-- SINGLE MESSAGE --> */}
        <div className={fromCss}>
          this is a basic mobile chat layout, build with tailwind css
        </div>

        {/* <!-- SINGLE MESSAGE 2 --> */}
        <div className={fromCss}>
          It will be used for a full tutorial about building a chat app with
          vue, tailwind and firebase.
        </div>

        {/* <!-- SINGLE MESSAGE 3 --> */}
        <div className={toCss}>
          check my twitter to see when it will be released.
        </div>
      </div>

      <div>
        <form>
          <Input type="text"></Input>
          <button type="submit"></button>
        </form>
      </div>
    </div>
  );
}

export default MessageWindow;
