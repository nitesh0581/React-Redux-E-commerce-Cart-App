import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import firstCarousel from "../images/carousel-0.jpg";
import secondCarousel from "../images/carousel-0.jpg";
import thirdCarousel from "../images/carousel-0.jpg";
import forthCarousel from "../images/carousel-0.jpg";
import fifthCarousel from "../images/carousel-0.jpg";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
function CarouselPage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="carousel-wrapper"
    >
      <Carousel.Item className="carousel-item">
        <img
          className="carousel-img"
          text="first-slide"
          src={firstCarousel}
          alt="firstCarousel"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img text="Second-slide" src={secondCarousel} />
      </Carousel.Item>
      <Carousel.Item>
        <img text="thirdCarousel" src={thirdCarousel} alt="thirdCarousel" />
      </Carousel.Item>
      <Carousel.Item>
        <img text="Second-slide" src={forthCarousel} />
      </Carousel.Item>
      <Carousel.Item>
        <img text="fifthCarousel" src={fifthCarousel} alt="fifthCarousel" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPage;
