import { useState, useId, useRef, cloneElement } from "react";
import CSS from "./Accordion.module.css";

const Accordion = ({
  title,
  children,
  titleClassName = "",
  contentClassName = "",
  className = "",
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const contentId = useId();
  const detailsRef = useRef(null);
  const contentRef = useRef(null);

  // Intercept the summary click when closing is triggered.
  const handleSummaryClick = (e) => {
    if (detailsRef.current.open && !isClosing) {
      // Prevent the native close so we can animate.
      e.preventDefault();
      // Immediately update state so that the icon loses its rotated state.
      setIsOpen(false);
      // Start the closing animation.
      setIsClosing(true);
      // Remove any opening animation class if present.
      contentRef.current.classList.remove(CSS.fadeInDown);
      // Force reflow to restart the animation.
      void contentRef.current.offsetWidth;
      // Apply the fadeOutUp animation.
      contentRef.current.classList.add(CSS.fadeOutUp);
    }
  };

  // Let native toggle work when opening.
  const handleToggle = (e) => {
    if (e.target.open && !isClosing) {
      setIsOpen(true);
    }
  };

  // When the animation ends, complete the closing process.
  const handleAnimationEnd = () => {
    if (isClosing) {
      contentRef.current.classList.remove(CSS.fadeOutUp);
      setIsClosing(false);
      // Programmatically close the details element.
      detailsRef.current.open = false;
    }
  };

  return (
    <details
      ref={detailsRef}
      onToggle={handleToggle}
      className={`${CSS.details} ${className}`}
    >
      <summary
        onClick={handleSummaryClick}
        className={`${CSS.summary} ${titleClassName}`}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span>{title}</span>
        {icon &&
          cloneElement(icon, {
            className: [
              icon.props.className,
              CSS.icon,
              isOpen && !isClosing && CSS.open, // Icon rotates only when open and not closing.
            ]
              .filter(Boolean)
              .join(" "),
          })}
      </summary>
      <div
        ref={contentRef}
        id={contentId}
        onAnimationEnd={handleAnimationEnd}
        className={`
          ${CSS.content} 
          ${!isClosing && isOpen ? CSS.fadeInDown : isClosing ? CSS.fadeOutUp : ""} 
          ${contentClassName}
        `}
      >
        {children}
      </div>
    </details>
  );
};

export default Accordion;
