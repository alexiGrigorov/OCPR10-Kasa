import SvgIcon from "../components/SvgIcon";
import Star from "../assets/svgs/star.svg?react";

function Rating({ rating, className }) {
  const totalStars = 5;

  return (
    <div className={`flex ${className}`}>
      {Array.from({ length: totalStars }, (_, index) => {
        const starColor =
          index < rating ? "var(--clr-primary)" : "var(--clr-neutral-300)";
        return (
          <SvgIcon
            key={index}
            svg={<Star />}
            color={starColor}
            className="star-icon"
          />
        );
      })}
    </div>
  );
}

export default Rating;
