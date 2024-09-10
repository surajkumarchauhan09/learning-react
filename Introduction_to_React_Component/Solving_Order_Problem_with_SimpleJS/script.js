import { createRoot } from "react-dom/client";
import "./style.css";
//We can pass any name of parameter but "props" is most common in React js
function Card(props) {
  //This is called destructuring method
  const {key, title, image, brand, price} = props //Here we are destructuring the props object
  return (
    <div className="card" key={key}>
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

const root = createRoot(document.querySelector("#root"));

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const container2 = data.products.map((product) => {
      return Card({ //from here we are passing the props object
        key: product.id,
        title: product.title,
        image: product.images, //now you can exchange the order of these key there will no any effect on your page
        brand: product.brand,
        price: product.price
      });
    });
    root.render(<div className="container">{container2}</div>);
  });

// if (module.hot) {
//   module.hot.accept();
// }
