import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0); //Basically state are the local variable of any component 
  //local variable mean we define a state inside that component and state are mutable mane changeable
  const [name, setName] = useState("Suraj Kumar");//state are updated by component 
  //we use state when any variable is continuously updating 
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <button
        onClick={() => {
          // setCount(count + 1);
          console.log(count);
          // setCount(count+1)
          setCount(previousState=>previousState + 1);
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
//props and state have a similarity that in both case whether a props change or state change 
//page is automatically rerender