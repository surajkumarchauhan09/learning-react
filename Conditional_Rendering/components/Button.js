const Button = ({ imageUrl, clickHandler, children }) => {
  console.log(children);
  return (
    <button title={children} onClick={clickHandler}>
      <img src={imageUrl} alt={children} />
    </button>
  );
};
export default Button;
