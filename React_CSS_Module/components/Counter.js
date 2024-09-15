import { useState } from "react";
import Style from "./counter.module.css"
const Counter = () => { //You can change name of passed prop like this
  const [count, setCount] = useState(0);
   
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(previousState=>previousState + 1);
          setCount((previousState) => previousState + 1);
          setCount((previousState) => previousState + 1);
        }}
        className={Style.button} //If you are using single class then you can use like this
      >
        Increase Count
      </button>
    </div>
  );
};
export default Counter;
