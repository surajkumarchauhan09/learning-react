const AppleBasket = ({ appleCount, basketName }) => {
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
