import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parent from "./Parent";
import { TicTac, Cell } from "./TicTac";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Accordion from "./Accordion";
import Scrolls from "./Scrolls";

function App() {
  const [count, setCount] = useState(0);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let e = [
      { title: "T-Swift", loc: "Houston", date: "April" },
      { title: "Axe", loc: "Austin", date: "April" },
      { title: "LOTR", loc: "Dallas", date: "May" },
    ];
    setEvents(e);
  }, []);
  return (
    <Router>
      <div>
        <div className="bg-slate-400 text-5xl py-4">Playground </div>
        <nav className="bg-slate-800 p-4 text-white flex justify-start align-middle">
          <ul className=" flex justify-start">
            <li className="px-4">
              <Link to="/" className=" hover:bg-emerald-100">
                Parent
              </Link>
            </li>
            <li className="px-4">
              <Link to="/tictac" className=" hover:bg-emerald-100">
                TicTacToe
              </Link>
            </li>
            <li className="px-4">
              <Link to="/accordion" className=" hover:bg-emerald-100">
                Accordion
              </Link>
            </li>
            <li className="px-4">
              <Link to="/scrolls" className=" hover:bg-emerald-100">
                Scrolls
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Parent />} />
            <Route path="/tictac" element={<TicTac />} />
            <Route path="/accordion" element={<Accordion />} />
            <Route path="/scrolls" element={<Scrolls />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function EventList({ events }) {
  //const { events } = events;
  return (
    <>
      <ul>
        {events.map((event) => (
          <li className="bg-slate-400">
            <div className="flex justify-center items-center flex-col">
              <div className="bg-slate-300 w-[400px] h-[100px] my-3 flex flex-col items-start">
                <div>Event: {event.title}</div>
                <div>Loc: {event.loc}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
