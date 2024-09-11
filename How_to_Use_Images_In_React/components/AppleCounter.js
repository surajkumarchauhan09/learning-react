import Button from "./button";
import LeftArrow from "../Assets/images/left-arrow.png";
import RightArrow from "../Assets/images/right-arrow.png";
import AppleBasket from "./AppleBasket";
import './AppleCounter.css'
const AppleCounter = () => {
  return (
    <section>
      <AppleBasket appleCount={10} basketName={'Basket-1'} />
      <Button imageUrl={LeftArrow} Arrow={"LeftArrow"} Title={'LeftArrow'}/>
      <Button imageUrl={RightArrow} Arrow={"RightArrow"} Title={'RightArrow'}/>
      <AppleBasket appleCount={0} basketName={'Basket-2'}/>
    </section>
  );
};
export default AppleCounter;

//Now you design is ready just like the project of 1st video but I have'nt implement the functionality so to implement the 
//functionality you must need to know about hooks and state but in next video I will implement the functionality without hooks
// and state

// in this section we had learnt how to build a component and use multiple times