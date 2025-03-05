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
      e.preventDefault();

      setIsOpen(false); // Immediately update state so that the icon loses its rotated state.
      setIsClosing(true); // Start the closing animation.

      contentRef.current.classList.remove(CSS.fadeInDown);
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
      detailsRef.current.open = false;
    }
  };

  return (
    <details
      ref={detailsRef}
      onToggle={handleToggle}
      className={`${className} overflow-hidden`}
    >
      <summary
        onClick={handleSummaryClick}
        className={`${titleClassName} cursor-pointer select-none`}
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
        className={`${!isClosing && isOpen ? CSS.fadeInDown : isClosing ? CSS.fadeOutUp : ""} ${contentClassName} opacity-0 `}
      >
        {children}
      </div>
    </details>
  );
};

export default Accordion;
