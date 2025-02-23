import { Link } from "react-router-dom";

import CSS from "./RentalPreviewCard.module.css";

function RentalPreviewCard({ rental }) {
  return (
    <div className={`${CSS.rentalPreviewCard} rounded-10`}>
      <h3
        className={`${CSS.rentalPreviewCardTitle} text-bold text-neutral-100`}
      >
        {rental.title}
      </h3>
      <img
        className={`${CSS.rentalPreviewCardImg} rounded-10`}
        src={rental.cover}
        alt={rental.title}
      />
    </div>
  );
}

function RentalsPreview({ rentalsData }) {
  return (
    <div className="rentals-preview d-grid grid-center rounded-25 ">
      {rentalsData.map((rental) => (
        <Link
          to={`logement/${rental.id}`}
          key={rental.id}
          className="text-decoration-none"
        >
          <RentalPreviewCard rental={rental} />
        </Link>
      ))}
    </div>
  );
}

export default RentalsPreview;
