import React from "react";
import MessageWindow from "./MessageWindow";
import SideNav from "./SideNav";

function Rooms() {
  return (
    <div>
      <div className="relative min-h-screen flex">
        {/* sidebar */}
        <SideNav />
        {/* content goes here */}
        <MessageWindow />
      </div>
    </div>
  );
}

export default Rooms;
