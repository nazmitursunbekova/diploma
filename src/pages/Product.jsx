import { useContext } from "react";
import { useMatch } from "react-router-dom";
import { AppContext } from "../App";
import NotFound from "./NotFound";
import AddToCart from "../components/AddToCart/AddToCart";

export default function Product() {
  const { params } = useMatch("/product/:path");
  const { products } = useContext(AppContext); 

  const product = products.find(product => product.path === params.path);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="Product">
      <h1>{product.name}</h1>
      <div className="Product_in">
        <div className="Product_img">
          <img src={product.picture} alt={product.name} />
        </div>
        <div className="Product_content">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere perferendis laudantium eos incidunt laborum labore id vero neque soluta sequi asperiores quae impedit, voluptatibus animi excepturi ipsam sit minus officiis veniam. Esse, nemo itaque officiis asperiores accusamus praesentium natus porro quam laudantium eveniet magnam est incidunt fugit architecto odio ex, illum possimus iusto sapiente soluta libero beatae. Aut eveniet optio earum similique nemo deleniti nihil distinctio, ea neque dolore, voluptas error rerum dolorem nostrum animi, odit praesentium provident cum illo!</p>
          <span>{product.price} som</span>
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
}