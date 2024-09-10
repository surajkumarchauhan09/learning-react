import { createRoot } from "react-dom/client";
import React from "react";
import "./style.css";

function Card({ title, image, brand, price }) {
  //you can destructure a object like this also in just one step
  // const { key, title, image, brand, price } = props;
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="card-contain">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>&#8377;{price}</b>
        </p>
      </div>
    </div>
  );
}
// function Card2() {
//   return (
//     <div className="card" key='1'>
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaSL7UizsC6j4wkLwoQXieRQOCLKEjjgXylw&s" alt="" />
//       <div className="card-contain">
//         <h3>Iphone</h3>
//         <p>Apple</p>
//         <p>
//           <b>&#8377;12</b>
//         </p>
//       </div>
//     </div>
//   );
// }

const root = createRoot(document.querySelector("#root"));
// console.log(Card2())

//In render method you can pass React element which ultimately a object which are contain some property that are necessary
// if you are remove any of property from these four then this render method gives you an error

// root.render({
//   $$typeof: Symbol.for("react.element"),
//   type: Card,
//   //in the value of these type key you can pass a function instead of a html element if you pass
//   //a function as a value of this type key then render what will do it actually first put the props as argument of
//   //this function then call that function then render the return react element that it get as a return value
//   ref: null,
// props: {
//   key: 1,
//   title: "Iphone15",
//   brand: "Apple",
//   image:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaSL7UizsC6j4wkLwoQXieRQOCLKEjjgXylw&s",
//   price: 150000,
// },
// });

//Basically a react component is a react element whose type is a function
//You can create this React element by React.createElement method where you can pass function as first argument and
//object as a second argument

// root.render(
//   React.createElement(Card,{
//     key: 1,
//     //if you are creating element like this then you need not to pass key as a parameter and use it in your function
//     title: "Iphone15",
//     brand: "Apple",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaSL7UizsC6j4wkLwoQXieRQOCLKEjjgXylw&s",
//     price: 150000,
//   })
// )

// you can make it more short than now through following method
// root.render(
//   <Card
//     key="1"
//     price="150000"
//     title="Iphone"
//     brand="Apple"
//     image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaSL7UizsC6j4wkLwoQXieRQOCLKEjjgXylw&s"
//   />
// );
//you can see how JSX is changing into React.createElement in JSX compiler by searching on google

//React component is a function which are returning some function:- this is actual definition of React component
//in the interview point of view
//React component is a reuseable piece of UI

//Now you can use react component to render multiple element and you need not to maintain the order of  your argument that you had passed
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const container2 = data.products.map((product) => {
      return (
        <Card
          key={product.id}
          title={product.title}
          image={product.images}
          brand={product.brand}
          price={product.price}
        />
      );
    });
    root.render(<div className="container">{container2}</div>);
  });
