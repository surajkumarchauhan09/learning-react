import { useState } from "react";
const state = [0, "Suraj Kumar"];
const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Suarj Kumar");
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <button
        onClick={() => {
          // setCount(count + 1);
          console.log(count);
          // setCount(count+1)
          setCount((previousState) => previousState + 1);
          setCount((previousState) => previousState + 1);//this is bached the update of react state
          setCount((previousState) => previousState + 1);
          console.log(count)
        }}
      >
        Increase Count
      </button>
    </div>
  );
};
export default Counter;
