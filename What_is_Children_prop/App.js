import AppleCounter from "./components/AppleCounter";
import Counter from "./components/Counter";

const App = ({root}) => {
  return (
    <div>
      <Counter><AppleCounter/></Counter>{/*You can also pass component as children*/ }
      <AppleCounter/> 
    </div>
  );
};
export default App;
