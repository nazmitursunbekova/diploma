import "./Delivery.css"

export default function Delivery() {
  return (
    <div className="Delivery">
      <h1>Payment and delivery</h1>
      <h2>ORDERING An order can be placed in several ways.</h2>
      <div className="Row">
        <div className="Col-4">
          <div className="First">
         
            <p>
              On the site: Select a product and add it to your shopping cart by
              pressing the "Add to Cart" button next to the
              product.
            </p>
          </div>
        </div>
        <div className="Col-4">
          <div className="First">
            <p>
              Go to the shopping cart in the top right corner of the site. Press
              the "Checkout" button. Enter your name, phone number, and delivery
              address (optional address if needed)
            </p>
          </div>
        </div>
        <div className="Col-4">
          <div className="First">
            <p>
              Select a Payment Method. Choose a shipping method. Press the
              "Confirm order" button and wait for the operator's call (up to 15
              minutes)
            </p>
          </div>
        </div>
      </div>
      <div className="AboutDelivery">
        <p>
          Once you have met all three points, you can expect your order <br />
          Delivery is carried out during the day in the city and during the week
          in other regions <br />
          
        </p>
        <div className="HaveNiceDay"> HAVE A NICE DAYI!</div>
        <h3>THANKS FOR CHOOSING US!</h3>
      </div>
    </div>
  );
}
