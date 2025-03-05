import { useState, useEffect, Children, cloneElement } from "react";
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
  const images = Children.toArray(children);
  const totalImages = images.length;

  if (totalImages <= 1) {
    return <div className={`${CSS.carousel} ${className}`}>{images}</div>;
  }

  const slides = [images[totalImages - 1], ...images, images[0]];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-play
  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);
    return () => clearInterval(autoPlay);
  }, [autoPlayInterval]);

  // Keyboard
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function nextSlide() {
    if (isTransitioning) return; // ignore if in the middle of an animation
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }

  function prevSlide() {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }

  // Use onTransitionEnd to handle wrap-around
  const handleTransitionEnd = () => {
    let newIndex = currentIndex;
    if (currentIndex === totalImages + 1) {
      newIndex = 1;
      setTransitionEnabled(false); // turn off transition to "jump" instantly
      setCurrentIndex(newIndex);
    } else if (currentIndex === 0) {
      newIndex = totalImages;
      setTransitionEnabled(false);
      setCurrentIndex(newIndex);
    }
    // Re-enable user clicks
    setIsTransitioning(false);
  };

  // Re-enable transition after instant jump
  useEffect(() => {
    if (!transitionEnabled) {
      // Turn transition back on after the DOM updates with the new index
      // (two rAF calls or small setTimeout(…) to ensure the jump is rendered first)
      const timer = requestAnimationFrame(() =>
        requestAnimationFrame(() => setTransitionEnabled(true)),
      );
      return () => cancelAnimationFrame(timer);
    }
  }, [transitionEnabled]);

  // For the slide indicator
  let displayIndex = currentIndex;
  if (displayIndex === 0) displayIndex = totalImages;
  if (displayIndex === totalImages + 1) displayIndex = 1;

  return (
    <div className={`${className} w-full overflow-hidden relative`}>
      <div className="h-full overflow-hidden">
        <div
          className="flex w-full h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: transitionEnabled ? "transform 0.3s ease" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex grow-0 shrink-0 basis-full justify-center items-center h-full"
            >
              {cloneElement(slide, {
                className: `w-full h-full object-cover ${
                  slide.props.className || ""
                }`,
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        className={`${CSS.arrowLeft} absolute z-2 p-0 border-0 bg-transparent cursor-pointer`}
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <SvgIcon svg={<ArrowLeft />} color={color} />
      </button>
      <button
        className={`${CSS.arrowRight} absolute z-2 p-0 border-0 bg-transparent cursor-pointer`}
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <SvgIcon svg={<ArrowRight />} color={color} />
      </button>

      {/* Indicator */}
      <div className={`${CSS.indicator} absolute z-2`} style={{ color }}>
        {displayIndex}/{totalImages}
      </div>
    </div>
  );
}

export default Carousel;
