import Button from "./Button";
import LeftArrow from "../Assets/images/left-arrow.png";
import RightArrow from "../Assets/images/right-arrow.png";
import AppleBasket from "./AppleBasket";
import "./AppleCounter.css";
import { useState } from "react";

const AppleCounter = () => {
  const totalAppleCount = 10;
  const [rightAppleCount, setRightAppleCount] = useState(0);
  const [leftAppleCount, setLeftAppleCount] = useState(
    totalAppleCount - rightAppleCount
  );
  const leftClickHandler = () => {
    if (rightAppleCount > 0) {
      setLeftAppleCount(leftAppleCount + 1);
      setRightAppleCount(rightAppleCount - 1);
    }
  };
  const rightClickHandler = () => {
    if (leftAppleCount > 0) {
      setRightAppleCount(rightAppleCount + 1);
      setLeftAppleCount(leftAppleCount - 1);
    }
  };
  return (
    <section>
      <AppleBasket appleCount={leftAppleCount} basketName={"Basket-1"}/>
      <Button imageUrl={LeftArrow} clickHandler={leftClickHandler}>
        LeftArrow
        {/*Here you can write any things you can write javascript also by using curly bracket*/}
      </Button>
      <Button
        imageUrl={RightArrow}
        clickHandler={rightClickHandler}
        children={"RightArrow"} //You can pass children like this also
      />
      <AppleBasket appleCount={rightAppleCount} basketName={"Basket-2"} />
    </section>
  );
};
export default AppleCounter;
