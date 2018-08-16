import React from "react";

import RoomList from "../chatrooms/RoomList";
import MessageList from "../chatrooms/MessageList";

export default () => {
  return (
    <div className="row">
      <div className="col-md-3">
        <RoomList />
      </div>
      <div className="col-md-9">
        <MessageList />
      </div>
    </div>
  );
};
