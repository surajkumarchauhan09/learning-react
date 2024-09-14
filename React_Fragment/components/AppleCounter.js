import Button from "./Button";
import LeftArrow from "../Assets/images/left-arrow.png";
import RightArrow from "../Assets/images/right-arrow.png";
import AppleBasket from "./AppleBasket";
import "./AppleCounter.css";
import { useState , Fragment } from "react";
console.log(Fragment);//This return you symbol(react.fragment).Actually this is a symbol data 
//type
// console.log(symbol.for('react.fragment'));
console.log(<Fragment></Fragment>)//This return a React Element

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
      setLeftAppleCount(leftAppleCount-1)    
    }
  };
  return (
    <>{/*This is the short form of react fragment. We use react fragment tow return tow or more than 
    Element in React component. You can use div instead of this react fragment but div creates 
    Extra space but this not . You can use full fragment tag instead of this short tag 
    <fragment></fragment>*/}
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
 
