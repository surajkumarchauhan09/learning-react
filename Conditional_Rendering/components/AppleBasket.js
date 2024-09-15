const AppleBasket = ({ appleCount, basketName }) => {
  return (  
    <div className="apple-basket">
      <h1>
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
