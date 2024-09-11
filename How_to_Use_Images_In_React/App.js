import AppleCounter from "./components/AppleCounter";
//If you want that if you are going to crate any Element or component of React then automatic suggestion come
//then you need to install a React Extension
//Now if you want to Create a React component You just need to enter rfc only

// export default function App() {
//   return (
//     <div>App</div>
//   )
// }

// export default App //You can export this component by using any of this two method
//Note We create this app component because whatever component We have made I made all those component under this component
//In short This app component is the main component

// You can use Arrow Function instead of that above function
// If You are creating a variable then you need use only export instead of this export default but
// Here we have to use export default so you need use second method
const App = () => {
  return (
    <div>
      <AppleCounter />
    </div>
  );
};
export default App;
