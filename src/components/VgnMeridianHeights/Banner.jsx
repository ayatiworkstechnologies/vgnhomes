import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import Slider_1 from "@/assets/vgn-heritage/hero-3.jpg";
import Slider_2 from "@/assets/vgn-heritage/hero-3.jpg";
import Slider_1_Mobile from "@/assets/vgn-heritage/hero-3-1.jpg"; // Example mobile images
import Slider_2_Mobile from "@/assets/vgn-heritage/hero-3-1.jpg";
import VgnMeridianHeights from "@/assets/VgnMeridianHeights/Meridian-Heights.jpg";

const slides = [
  {
    image: VgnMeridianHeights,
    mobileImage: VgnMeridianHeights,
    title: '',
    description: '',
  },
 
];

function Banner() {
  return (
    <div className="w-100">
      <Carousel
        fade
        interval={5000}
        indicators
        controls
        pause={false}
        ride="carousel"
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            {/* Desktop Image */}
            <img
              className="d-none d-sm-block w-100"
              src={slide.image}
              alt={`Slide ${index + 1}`}
              style={{
                width: '100%',
                objectFit: 'cover',
              }}
            />

            {/* Mobile Image */}
            <img
              className="d-block d-sm-none w-100"
              src={slide.mobileImage}
              alt={`Slide ${index + 1} Mobile`}
              style={{
                width: '100%',
                objectFit: 'cover',
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
