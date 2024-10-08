import { createRoot } from "react-dom/client";
import "./style.css";

function Card(key, title, image, brand, price) {
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
      return Card(
        product.id,
        product.title,
        product.images, //here you cannot change the order of this argument if you do so this will affect your page
        product.brand, //so over come this this problem react introduce react component
        product.price //that we read in next lecture
      );
    });
    root.render(<div className="container">{container2}</div>);
  });

// if (module.hot) {
//   module.hot.accept();
// }
