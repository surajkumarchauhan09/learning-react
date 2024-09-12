import Button from "./Button";
import LeftArrow from "../Assets/images/left-arrow.png";
import RightArrow from "../Assets/images/right-arrow.png";
import AppleBasket from "./AppleBasket";
import "./AppleCounter.css";

import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

// const AppleCounter = () => {
//   return (
//     <section>
//       <AppleBasket appleCount={10} basketName={"Basket-1"} />
//       <Button
//         imageUrl={LeftArrow}
//         Arrow={"LeftArrow"}
//         clickHandler={() => {
//           console.log("LeftArrow");
//         }}
//       />
//       <Button
//         imageUrl={RightArrow}
//         Arrow={"RightArrow"}
//         clickHandler={() => {
//           console.log("RightArrow");
//         }}
//       />
//       <AppleBasket appleCount={0} basketName={"Basket-2"} />
//     </section>
//   );
// };
// export default AppleCounter;

const totalAppleCount = 10;
let rightAppleCount = 0;
let leftAppleCount = totalAppleCount - rightAppleCount;
const AppleCounter = () => {
  const leftClickHandler = () => {
    if (rightAppleCount > 0) {
      leftAppleCount++;
      rightAppleCount--;
      root.render(<AppleCounter />);//if you just update your variable by using event handler then that updated variable  
    }//will not reflect on your page to reflect that variable you need to Re-Render that variable 
  };
  const rightClickHandler = () => {
    if (leftAppleCount > 0) {
      rightAppleCount++;
      leftAppleCount--;
      root.render(<AppleCounter />);//This is the not good way to Render your change again and again it is better than normal javascript 
    }
  };
  return (
    //the below empty tag is called React fragment when you use this there is no any Element were created and
    // this is also not give any error and this is act like a container
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
      {/* <p style={{ textAlign: "center", marginTop: "32px" }}>
        <button
          onClick={() => {
            root.render(<AppleCounter/>)
          }}
        >
          Re-Render
        </button>
      </p> */}
    </>
  );
};
export default AppleCounter;
