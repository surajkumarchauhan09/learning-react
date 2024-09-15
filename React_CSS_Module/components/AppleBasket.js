import Style from "./counter.module.css"
const AppleBasket = ({ appleCount, basketName }) => {
  return (  
    <div className="apple-basket">
      <h1 className={Style['text-Xl']}>{/*If you class name is in two world then you can use your 
      Style like This*/}
        <span>{appleCount}</span>
        Apple
      </h1>
      <p>{basketName}{(appleCount===10 && '(Full)')||(appleCount===0 && '(Empty)')}</p>
      {/* You are making any things render on some condition were true then This is called
       conditional rendering */}
    </div>
  );
};
export default AppleBasket;
