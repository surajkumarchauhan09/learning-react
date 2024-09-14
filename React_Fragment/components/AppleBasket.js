const AppleBasket = ({ appleCount, basketName }) => {//props are immutable but you can modify
  //but you should not do so this is wrong practice 
  // appleCount = 'suraaj kumar '
  return (  
    <div className="apple-basket">
      <h1>
        <span>{appleCount}</span>
        Apple
      </h1>
      <p>{basketName}</p>
    </div>
  );
};
export default AppleBasket;
