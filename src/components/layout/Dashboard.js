import React from "react";

import RoomList from "../rooms/RoomList";
import MessageList from "../messages/MessageList";

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
