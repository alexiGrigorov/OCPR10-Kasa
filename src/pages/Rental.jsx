import { useParams, useRouteLoaderData } from "react-router-dom";

import { throwNotFoundResponse } from "../utils/httpResponses";

function Rental() {
  const id = useParams().id;
  const rental = useRouteLoaderData("mainApp").find(
    (rental) => rental.id === id,
  );

  if (!rental) {
    throwNotFoundResponse();
  }

  console.log(id);
  console.log(rental);

  return (
    <main className="max-w-screen m-auto p-i-pages">
      <h1>Logement {id}</h1>
    </main>
  );
}

export default Rental;
