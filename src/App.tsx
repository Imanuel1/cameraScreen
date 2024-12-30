import { useEffect, useState } from "react";
import "./App.css";
import useSocket from "./hook/useSocket";
import { parseArrayToObject } from "./utils/utils";
import {
  addEventTopic,
  allEventsTopic,
  deleteEventTopic,
  updateEventTopic,
} from "./utils/environment";

export type EventType = {
  id: string;
  timestamp: Date;
  message: string;
  source: EventSource;
};

function App() {
  useEffect(() => {}, []);

  return (
    <div>
      <div className="card"></div>

      <p className="read-the-docs"></p>
    </div>
  );
}

export default App;
