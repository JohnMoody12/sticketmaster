import React, { useEffect, useState } from "react";

const Child = React.memo(({ testState, randomNum }) => {
  const [childRandomNum, setChildRandomNum] = useState("");
  function childRandom() {
    setChildRandomNum((childRandomNum) => Math.floor(Math.random() * 100));
  }
  useEffect(() => {
    setChildRandomNum((childRandomNum) => Math.floor(Math.random() * 100));
  }, []);
  let bob = Math.floor(Math.random() * 100);
  return (
    <div>
      <button
        className=" bg-emerald-400 p-4 m-4 rounded-md"
        onClick={childRandom}
      >
        Child Button
      </button>
      <button
        className=" bg-emerald-400 p-4 m-4 rounded-md"
        onClick={randomNum}
      >
        Parent State Button
      </button>

      <div className=" bg-emerald-400 rounded-md p-5 m-5 font-semibold text-2xl">
        State from Par: {testState}
      </div>
      <div className=" bg-emerald-400 rounded-md p-5 m-5 font-semibold text-2xl">
        ChildRandomNum: {childRandomNum}
      </div>
      <div className=" bg-emerald-400 rounded-md p-5 m-5 font-semibold text-2xl">
        Bob (var in child fn): {bob}
      </div>
    </div>
  );
});
export default Child;
