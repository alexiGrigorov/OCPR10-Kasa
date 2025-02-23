import { useParams, useRouteLoaderData } from "react-router-dom";

import { throwNotFoundResponse } from "../utils/httpResponses";

import Host from "../ui/Host";
import Rating from "../ui/Rating";
import ExpendableDetails from "../ui/ExpendableDetails";

function Rental() {
  const id = useParams().id;
  const rental = useRouteLoaderData("mainApp").find(
    (rental) => rental.id === id,
  );

  if (!rental) {
    throwNotFoundResponse();
  }

  return (
    <main className="max-w-screen m-i-auto p-i-pages">
      <div id="carousel" className="grid-rental-carousel">
        carousel
      </div>

      <div className="d-flex flex-space-between rental-overview">
        <div className="rental-summary m-bs-rental-summary">
          <h2 className="text-primary text-medium font-size-rental-title">
            {rental.title}
          </h2>
          <p className="text-medium font-size-rental-location">
            {rental.location}
          </p>
          <div className="m-bs-rental-tags d-flex gap-2">
            {rental.tags.map((tag) => (
              <span
                key={tag}
                className="text-bold text-neutral-100 bg-primary font-size-rental-tag badge"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="rental-profile d-flex flex-space-between flex-align-end gap-5">
          <Host host={rental.host} className="rental-host" />
          <Rating rating={rental.rating} className="rental-rating" />
        </div>
      </div>

      <div className="d-flex flex-space-between rental-details gap-rental-details m-bs-rental-details">
        <ExpendableDetails title="Description" className={"flex-basis-50"}>
          <p>{rental.description}</p>
        </ExpendableDetails>
        <ExpendableDetails title="Équipements" className={"flex-basis-50"}>
          <ul>
            {rental.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </ExpendableDetails>
      </div>
    </main>
  );
}

export default Rental;
