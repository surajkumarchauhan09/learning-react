const Button = ({ imageUrl, Arrow,clickHandler }) => {
  return (
    <button
      title={Arrow}
      onClick={clickHandler}
    >
      <img src={imageUrl} alt={Arrow} />
    </button>
  );
};
export default Button;
