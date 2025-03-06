import { Link } from "react-router-dom";

import RentalPreviewCard from "./RentalPreviewCard";

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
