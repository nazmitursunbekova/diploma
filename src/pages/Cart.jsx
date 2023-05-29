import CartList from "../components/CartList/CartList";
import OrderForm from "../components/OrderFrom/OrderFrom";

export default function Cart() {
  return (
    <div className="Cart">
      <h1>YOUR PRODUCT</h1>
      <CartList/>
      <OrderForm/>
    </div>
  );
}