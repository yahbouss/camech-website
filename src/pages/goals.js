import "./goals.scss";
import { Container } from "react-bootstrap";

//assets
import pic1 from "../shared/assets/og.jpg";
import pic2 from "../shared/assets/Enactus.jpg";
import pic3 from "../shared/assets/jeans.jpg";

const Goals = () => {
  return (
    <>
      <h1 className="page-title">OUR Goals</h1>
      <Container>
        <div className="card">
          <div className="card__content">
            <h3 className="card__content-subtitile">
              Reduce jeans usage in the world
            </h3>
            <p className="card__content-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              ipsam hic odio quaerat itaque, ipsa optio eveniet aspernatur
              consectetur! Quo nobis itaque eligendi expedita cupiditate aliquam
              accusantium asperiores quasi numquam?
            </p>
            <div className="card__content-pics">
              <img src={pic1} alt="." />
              <img src={pic2} alt="." />
              <img src={pic3} alt="." />
            </div>
          </div>
          <h2 className="card__title">Jeans</h2>
        </div>
        {/* card 2 */}
        <div className="card">
            <h2 className="card__title">Jeans</h2>
          <div className="card__content">
            <h3 className="card__content-subtitile">
              Reduce jeans usage in the world
            </h3>
            <p className="card__content-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              ipsam hic odio quaerat itaque, ipsa optio eveniet aspernatur
              consectetur! Quo nobis itaque eligendi expedita cupiditate aliquam
              accusantium asperiores quasi numquam?
            </p>
            <div className="card__content-pics">
              <img src={pic1} alt="." />
              <img src={pic2} alt="." />
              <img src={pic3} alt="." />
            </div>
          </div>
        </div>
{/* card 2 */}
        <div className="card">
          <div className="card__content">
            <h3 className="card__content-subtitile">
              Reduce jeans usage in the world
            </h3>
            <p className="card__content-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              ipsam hic odio quaerat itaque, ipsa optio eveniet aspernatur
              consectetur! Quo nobis itaque eligendi expedita cupiditate aliquam
              accusantium asperiores quasi numquam?
            </p>
            <div className="card__content-pics">
              <img src={pic1} alt="." />
              <img src={pic2} alt="." />
              <img src={pic3} alt="." />
            </div>
          </div>
          <h2 className="card__title">Jeans</h2>
        </div>
      </Container>
    </>
  );
};

export default Goals;
