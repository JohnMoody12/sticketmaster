import { useState } from "react";

const sections = [
  {
    value: "html",
    title: "HTML",
    contents:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    value: "css",
    title: "CSS",
    contents:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    value: "javascript",
    title: "JavaScript",
    contents:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

const Accordion = () => {
  const [accords, setAccords] = useState(
    new Array(sections.length).fill(false)
  );
  function toggle(i) {
    let newArray = accords.slice();
    newArray[i] = !newArray[i];
    setAccords(newArray);
  }
  return (
    <div className=" flex flex-col w-full items-center">
      <ul className="w-[50%] mx-auto">
        {sections.map((obj, i) => {
          return (
            <li key={i} className="w-full">
              <button
                onClick={() => toggle(i)}
                className="w-full hover:bg-slate-200 flex justify-between"
              >
                <span>{obj?.title}</span>
                <span> {accords[i] ? "^" : "v"} </span>
              </button>
              {accords[i] && (
                <div className="w-full text-left">{obj?.contents}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Accordion;
