const express = require("express");
const cors = require("cors");
const server = express();
server.use(express.json());
server.use(cors());
require("dotenv").config();

let e = [
  { title: "T-Swift", loc: "Houston", date: "April", id: 1 },
  { title: "Axe", loc: "Austin", date: "April", id: 2 },
  { title: "LOTR", loc: "Dallas", date: "May", id: 3 },
];

server.get("/events/:eventId", (req, res) => {
  try {
    const eventId = Number(req.params.eventId);
    const event = e.filter((event) => event.id == eventId)[0];
    res.json({ message: `event ${event.title}` });
  } catch {
    res.json("no event");
  }
});

server.listen(5000, () => {
  console.log("we listenin");
});
