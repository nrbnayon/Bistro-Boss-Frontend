import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import B1 from "../../assets/home/01.jpg";
import B2 from "../../assets/home/02.jpg";
import B3 from "../../assets/home/03.png";
import B4 from "../../assets/home/04.jpg";
import B5 from "../../assets/home/05.png";
import B6 from "../../assets/home/06.png";
const Banner = () => {
  return (
    <div>
      <Carousel autoPlay={true} interval={3000} infiniteLoop={true}>
        <div>
          <img src={B1} />
        </div>
        <div>
          <img src={B2} />
        </div>
        <div>
          <img src={B3} />
        </div>
        <div>
          <img src={B4} />
        </div>
        <div>
          <img src={B5} />
        </div>
        <div>
          <img src={B6} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
