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

// So you can add eventListener on any element like this
// const App = () => {
//   return (
//     <div>
//       <h1 onClick={(e)=>{//If you see the Event that log you will notice that this Event is not a normal Event like in 
//         console.log(e)   //Javascript have Actually this Event is created by react and this is their own Event
//       }}>Hello World</h1>
//       <input type="text" onChange={(e)=>{
//         console.log(e)
//       }}/>
//       <AppleCounter onClick={(e)=>{ //You can not put event on any component like this
//         console.log(e)//If you are putting Event Listener like this then this is pass as props if you want to use this 
//       }}/> 
//     </div>//Event listener then you need to accept this as argument and ten you can can use it in your AppleCounter.js file
//   );
// };
// export default App;

const App = () => {
  return (
    <div>
      <AppleCounter/> 
    </div>
  );
};
export default App;
