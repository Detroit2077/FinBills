import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

import Slider from "react-slick"; // Importing react-slick

// Testimonials Component
const Testimonials = () => {
  // Slider settings for customization
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true, // to show dots for navigation
    arrows: true, // for left-right arrows
    autoplay: true, // auto slide every 2 seconds
    autoplaySpeed: 2000, // slide interval time in ms
    className: "testimonial-slider",
  };

  const testimonials = [
    {
      name: "John Doe",
      message:
        "FinBills transformed the way we manage finances. It's simple, yet powerful.",
    },
    {
      name: "Jane Smith",
      message:
        "The best financial tool for growing businesses. It saved us time and money.",
    },
    {
      name: "Carlos Herrera",
      message: "Easy to use, intuitive, and reliable. I highly recommend it.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-100 px-3 gapy">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">
          What Our Customers Say
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          We’ve helped businesses around the world simplify their finances.
        </p>
      </div>

      <div className="mt-12 px-6">
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <blockquote className="italic text-gray-700 mb-4">{`"${testimonial.message}"`}</blockquote>
              <div className="text-gray-900 font-semibold">
                {testimonial.name}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;