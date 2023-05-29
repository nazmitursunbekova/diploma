import "./Contacts.css";

export default function Contacts() {
  return (
    <div className="Contacts">
      <div class="centered">
        <h1>
          HOUSEHOLD <br></br> APPLIANCES <br></br> SHOP
        </h1>
        <h2>KYRGYZSTAN KARAKOL<br></br> st TOKTOGUL 125A</h2>
        <h3>
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
            +996 708 22 36 18
          </a>
        </h3>
      </div>
      <div className="Apple">
        <img src="https://i.pinimg.com/564x/ca/27/57/ca2757320c646f22fa23fd63aa17131b.jpg" />
      </div>
      <div className="map">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Acf98b60208e9449827ed9f5c36c0ffdc0045f73467c474bfe98853fc49bd9729&amp;source=constructor"
          width="100%"
          height="400"
          frameborder="0"
        ></iframe>
         
      </div>
    </div>
  
  );
}
