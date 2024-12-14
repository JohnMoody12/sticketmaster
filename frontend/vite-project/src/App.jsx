import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parent from "./Parent";

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
    <>
      <div className="bg-slate-400 text-5xl">T e s t </div>
      <Parent />
      <EventList events={events} />
    </>
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
