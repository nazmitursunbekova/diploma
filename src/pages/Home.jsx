import "./Home.css";
export default function Home() {
  return (
    <div className="Home">
      <h1>TECHNOLOGY AND INNAVATION</h1>

      <div className="home_imgs">
        <div className="home_img home_img__big">
          <img
            src="https://www.remontbp.com/wp-content/uploads/2022/02/4-14-1500x1000.jpg"
            alt=""
            srcSet=""
          />
        </div>
        <div className="home_img">
          <img src="https://www.remontbp.com/wp-content/uploads/2022/02/6-14.jpg" />
        </div>
        <div className="home_img">
          <img src="https://www.remontbp.com/wp-content/uploads/2022/02/12-14.jpg" />
        </div>
      </div>

      <h2>
        The technologies of the future are developments that pursue a specific
        goal. This is a race track with motorcycles equipped with sensors that
        transmit data faster than the wheels turn. This is a 3D printed bridge
        over a medieval canal.
      </h2>
    </div>
  );
}
