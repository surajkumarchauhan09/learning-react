import { useState } from "react";
const Counter = ({children:AppleCounter}) => { //You can change name of passed prop like this
  const [count, setCount] = useState(0);
   
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
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
      {
        AppleCounter 
      }
    </div>
  );
};
export default Counter;
