import Button from "./Button";
import LeftArrow from "../Assets/images/left-arrow.png";
import RightArrow from "../Assets/images/right-arrow.png";
import AppleBasket from "./AppleBasket";
import "./AppleCounter.css";
import { useState } from "react";

// let rightAppleCount = 0;
// let leftAppleCount = totalAppleCount - rightAppleCount;
const AppleCounter = () => {
  const totalAppleCount = 10;
  const [rightAppleCount,setRightAppleCount] = useState(0)
  const [leftAppleCount,setLeftAppleCount] = useState(totalAppleCount - rightAppleCount)
  const leftClickHandler = () => {
    if (rightAppleCount > 0) {
      setLeftAppleCount(leftAppleCount+1)
      setRightAppleCount(rightAppleCount-1)
    }
  };
  const rightClickHandler = () => {
    if (leftAppleCount > 0) {
      setRightAppleCount(rightAppleCount+1)
      setLeftAppleCount(leftAppleCount-1) //This is called Declarative Programming because Here we are not telling to update this   
    }//in DOM
  };
  return (
    <>
      <section>
        <AppleBasket appleCount={leftAppleCount} basketName={"Basket-1"} />
        <Button
          imageUrl={LeftArrow}
          Arrow={"LeftArrow"}
          clickHandler={leftClickHandler}
        />
        <Button
          imageUrl={RightArrow}
          Arrow={"RightArrow"}
          clickHandler={rightClickHandler}
        />
        <AppleBasket appleCount={rightAppleCount} basketName={"Basket-2"} />
      </section>
    </>
  );
};
export default AppleCounter;
//to render again and again any variable is not a good way actually the good way is to use state in your project
//State is a type of variable which are automatically render if we are update it 
