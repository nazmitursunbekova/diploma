import "./Contacts.css";

export default function Contacts() {
  return (
    <div className="Contacts">
      <h1>HOUSEHOLD APPLIANCES SHOP</h1>
      <div className="Techn">
        <div className="col-3">
        </div>
      </div>

      <div className="Tech">
        <div className="Col-3">
          Our contacts: <br />
          <a
            className="Tel"
            target="_blank"
            rel="noreferrer"
            href="tel:+996 555 22 36 18"
          >
            +996 555 22 36 18
          </a>{" "}
          <br />
          <a
            className="Tel"
            target="_blank"
            rel="noreferrer"
            href="tel:+996 705 22 36 18"
          >
            +996 705 22 36 18
          </a>{" "}
          <br />
          <a
            className="Tel"
            target="_blank"
            rel="noreferrer"
            href="tel:+996 708 22 36 18"
          >
            +996  708 22 36 18
          </a>
        </div>
                        <div className="Col-6">
                    
                </div>

      </div>
      <p>
        <strong> Our adress : </strong>KYRGYSZTAN BISHKEK st AITMATOV 155A{" "}
      </p>
      <p>
        <strong>Our email : </strong>brand_name@gmail.com{" "}
      </p>
    </div>
  );
}
