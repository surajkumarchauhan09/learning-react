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
        AppleCounter //you can use passed component like this
      }
    </div>
  );
};
export default Counter;
//If you does'nt pass any things as children value and you make them console.log then this will give
//give undefined as a output