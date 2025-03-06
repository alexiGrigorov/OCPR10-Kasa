import CSS from "./RentalPreviewCard.module.css";

function RentalPreviewCard({ rental }) {
  return (
    <div className={`${CSS.rentalPreviewCard} grid rounded-10`}>
      <h3
        className={`${CSS.rentalPreviewCardTitle} z-1 font-bold text-neutral-100`}
      >
        {rental.title}
      </h3>
      <img
        className={`${CSS.rentalPreviewCardImg} z-0 object-cover w-full h-full brightness-60 rounded-10`}
        src={rental.cover}
        alt={rental.title}
      />
    </div>
  );
}

export default RentalPreviewCard;
