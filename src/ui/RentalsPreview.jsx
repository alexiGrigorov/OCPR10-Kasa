import { Link } from "react-router-dom";

import CSS from "./RentalsPreview.module.css";

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

function RentalsPreview({ rentalsData }) {
  return (
    <div className="rentals-preview grid justify-items-center rounded-25 gap-rentals-preview m-bs-rentals-preview p-rentals-preview">
      {rentalsData.map((rental) => (
        <Link
          to={`logement/${rental.id}`}
          key={rental.id}
          className="no-underline"
        >
          <RentalPreviewCard rental={rental} />
        </Link>
      ))}
    </div>
  );
}

export default RentalsPreview;
