import { useState } from "react";
//Basically this is a function
//this is also a Hook basically the function starting with use key word that are hook.Hook is just a fancy name which is a
//type of function which have some extra functionality

const Counter = () => {
  const [count, setCount] = useState(0);
  // const count = myStateArray[0];
  // const setCount = myStateArray[1]
  // if you are call this function this return a array which has two value first one is that value which you pass as argument
  // and the second value is a function which is basically a updater function which update first value
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        Increase Count
      </button>
    </div>
  );
};
export default Counter;
