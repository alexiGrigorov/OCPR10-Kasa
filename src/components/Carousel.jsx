import { useState, useRef, useEffect, Children } from "react";
import SvgIcon from "../components/SvgIcon";

import ArrowLeft from "../assets/svgs/arrow_left.svg?react";
import ArrowRight from "../assets/svgs/arrow_right.svg?react";

import CSS from "./Carousel.module.css";

function Carousel({
  children,
  color = "var(--clr-neutral-100)",
  autoPlayInterval = 5000,
  className,
}) {
  // Convert children to an array of images.
  const images = Children.toArray(children);
  const totalImages = images.length;

  // If only one image, render it without arrows/indicator.
  if (totalImages <= 1) {
    return <div className={`${CSS.carousel} ${className}`}>{images}</div>;
  }

  // Create an infinite-loop effect by cloning the last and first images.
  const slides = [images[totalImages - 1], ...images, images[0]];

  // currentIndex corresponds to the index in slides (starting at 1 for the first real image).
  const [currentIndex, setCurrentIndex] = useState(1);
  // Control transition to allow instant jumps after slide animation.
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const sliderRef = useRef(null);

  // Auto-play: restart the timer every time currentIndex changes.
  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);
    return () => clearInterval(autoPlay);
  }, [currentIndex, autoPlayInterval, totalImages]);

  // Keyboard navigation: left/right arrow keys.
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // Wrap-around logic when reaching cloned slides.
  useEffect(() => {
    if (currentIndex === totalImages + 1) {
      // Moved to the clone of the first slide.
      const timeout = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(1);
      }, 500); // Must match the CSS transition duration.
      return () => clearTimeout(timeout);
    }
    if (currentIndex === 0) {
      // Moved to the clone of the last slide.
      const timeout = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(totalImages);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, totalImages]);

  // Re-enable transition after an instant jump.
  useEffect(() => {
    if (!transitionEnabled) {
      const timeout = setTimeout(() => {
        setTransitionEnabled(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [transitionEnabled]);

  // Calculate display index (1-indexed for the indicator).
  let displayIndex = currentIndex;
  if (currentIndex === 0) {
    displayIndex = totalImages;
  } else if (currentIndex === totalImages + 1) {
    displayIndex = 1;
  }

  return (
    <div className={`${CSS.carousel} ${className}`}>
      <div className={CSS.sliderWrapper}>
        <div
          className={CSS.slider}
          ref={sliderRef}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: transitionEnabled ? "transform 0.5s ease" : "none",
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className={CSS.slide}>
              {slide}
            </div>
          ))}
        </div>
      </div>
      {/* Navigation arrows */}
      <button
        className={CSS.arrowLeft}
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <SvgIcon svg={<ArrowLeft />} color={color} />
      </button>
      <button
        className={CSS.arrowRight}
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <SvgIcon svg={<ArrowRight />} color={color} />
      </button>
      {/* Indicator */}
      <div className={CSS.indicator} style={{ color }}>
        {displayIndex}/{totalImages}
      </div>
    </div>
  );
}

export default Carousel;
