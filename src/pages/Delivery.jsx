import "./Delivery.css";

export default function Delivery() {
  return (
    <div className="Delivery">
      <div className="Container">
        <h1>Payment and delivery</h1>
        <h2>ORDERING An order can be placed in several ways.</h2>
        <div className="Row">
          <div className="Col-6">
            <p>
              {" "}
              On the site: Select a product and add it to your shopping cart by
              pressing the "Add to Cart" button next to the product.
            </p>
            <p>
              Go to the shopping cart in the top right corner of the site. Press
              the "Checkout" button. Enter your name, phone number, and delivery
              address (optional address if needed)
            </p>
            <p>
              Select a Payment Method. Choose a shipping method. Press the
              "Confirm order" button and wait for the operator's call (up to 15
              minutes)
            </p>
          </div>
          <div className="Col-6">
            <div className="About-me">
              <img src="https://i.pinimg.com/564x/a0/49/84/a049845050c5e60f407604c88705b8e7.jpg" />
            </div>
          </div>
       </div>
          <h4> HAVE A NICE DAYI!</h4>
          <h3>THANKS FOR CHOOSING US!</h3>
        </div>
      </div>
    
  );
}
