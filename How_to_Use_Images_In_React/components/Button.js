const Button = ({ imageUrl, Arrow, Title }) => {
  return (
    <button title={Title}>
      <img src={imageUrl} alt={Arrow} />
    </button>
  );
};
export default Button;
