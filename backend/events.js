const express = require("express");
const cors = require("cors");
const server = express();
const {
  testConnection,
  getAllEvents,
  getEvent,
  getEventTickets,
  bookTicket,
} = require("./db");
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
server.get("/tickets/:eventId", async (req, res) => {
  try {
    const eventId = Number(req.params.eventId);
    let eventInfo = await getEventTickets(eventId);
    res.json(eventInfo);
  } catch {
    res.json("no event");
  }
});
server.post("/tickets/book/:ticketId", async (req, res) => {
  try {
    const ticketId = Number(req.params.ticketId);
    let eventInfo = await bookTicket(ticketId);
    res.json(eventInfo);
  } catch {
    res.json("no event");
  }
});
testConnection();
server.listen(5000, () => {
  console.log("we listenin");
});

// que es esto. oh yeah. the sys design stuff. oops.
