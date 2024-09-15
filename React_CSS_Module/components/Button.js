import Style from "./counter.module.css" //You can import .module.css file like this
const Button = ({ imageUrl, clickHandler, children}) => {
  return (
    <button title={children} onClick={clickHandler} className={[Style.button,Style['text-Xl']].join(' ')}>
      {/*If you want to use multiple style class then you can use like this*/}
      <img src={imageUrl} alt={children} />
    </button>
  );
};
export default Button;
