import { useParams, useRouteLoaderData } from "react-router-dom";

import { throwNotFoundResponse } from "../utils/httpResponses";

import Carousel from "../components/Carousel";
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
    <main className="max-w-screen w-full mi-auto p-i-pages">
      <Carousel className={"h-rental-carousel"}>
        {rental.pictures.map((picture) => (
          <img key={picture} src={picture} alt={rental.title} />
        ))}
      </Carousel>

      <div className="flex justify-between rental-overview m-bs-rental-overview">
        <div className="rental-summary">
          <h2 className="text-primary font-medium font-size-rental-title">
            {rental.title}
          </h2>
          <p className="font-medium font-size-rental-location">
            {rental.location}
          </p>
          <div className="m-bs-rental-tags flex gap-2">
            {rental.tags.map((tag) => (
              <span
                key={tag}
                className="font-bold text-neutral-100 bg-primary font-size-rental-tag badge"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="rental-profile flex justify-between items-end gap-5">
          <Host host={rental.host} className="rental-host" />
          <Rating rating={rental.rating} className="rental-rating" />
        </div>
      </div>

      <div className="flex justify-between rental-details gap-rental-details m-bs-rental-details">
        <ExpendableDetails title="Description" className={"basis-50"}>
          <p>{rental.description}</p>
        </ExpendableDetails>
        <ExpendableDetails title="Équipements" className={"basis-50"}>
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
