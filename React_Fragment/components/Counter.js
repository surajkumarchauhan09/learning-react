import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0); 
  const [name, setName] = useState("Suarj Kumar");
   
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <button
        onClick={() => {
          console.log(count);
          setCount(previousState=>previousState + 1);
          setCount((previousState) => previousState + 1);
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
