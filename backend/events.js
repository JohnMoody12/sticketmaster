const express = require("express");
const cors = require("cors");
const server = express();
const { testConnection, getAllEvents, getEvent } = require("./db");
server.use(express.json());
server.use(cors());
require("dotenv").config();
//pgadmin stuff.
let e = [
  { title: "T-Swift", loc: "Houston", date: "April", id: 1 },
  { title: "Axe", loc: "Austin", date: "April", id: 2 },
  { title: "LOTR", loc: "Dallas", date: "May", id: 3 },
];

server.get("/events/:eventId", async (req, res) => {
  try {
    const eventId = Number(req.params.eventId);
    let eventInfo = await getEvent(eventId);
    res.json(eventInfo);
  } catch {
    res.json("no event");
  }
});
testConnection();
server.listen(5000, () => {
  console.log("we listenin");
});
