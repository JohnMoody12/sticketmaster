import { useCallback, useEffect } from "react";
import Child from "./Child";
import { useState } from "react";
const Parent = () => {
  const [testState, setTestState] = useState("a");
  const [parentRandomNum, setParentRandomNum] = useState("");
  const randomNum = useCallback(() => {
    setParentRandomNum((parentRandomNum) => Math.floor(Math.random() * 100));
  }, []);
  const updateState = useCallback(() => {
    setTestState((currState) => Math.floor(Math.random() * 100));
  }, []);

  useEffect(() => {
    setParentRandomNum((parentRandomNum) => Math.floor(Math.random() * 100));
  }, []);
  let parentBob = Math.floor(Math.random() * 100);
  return (
    <div>
      <div>
        <button
          className=" bg-blue-400 rounded-md p-5 m-5 text-white font-semibold text-2xl"
          onClick={randomNum}
        >
          Parent State
        </button>
        <button
          className=" bg-blue-400 rounded-md p-5 m-5 text-white font-semibold text-2xl"
          onClick={updateState}
        >
          State-&gt;Child
        </button>
        <div className=" bg-blue-400 rounded-md p-5 m-5 text-white font-semibold text-2xl">
          Parent Random Num State: {parentRandomNum}
        </div>
        <div className=" bg-blue-400 rounded-md p-5 m-5 text-white font-semibold text-2xl">
          Parent Bob (var in par fn): {parentBob}
        </div>
      </div>
      <div>
        <Child testState={testState} randomNum={randomNum} />
      </div>
    </div>
  );
};
export default Parent;
