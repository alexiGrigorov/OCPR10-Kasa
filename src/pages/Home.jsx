import { Link, useRouteLoaderData } from "react-router-dom";

import HomeBanner from "../ui/HomeBanner";
import RentalPreviewCard from "../ui/RentalPreviewCard";

function Home() {
  const rentalsData = useRouteLoaderData("mainApp");

  return (
    <main className="max-w-screen m-auto p-i-pages">
      <HomeBanner />
      {/* <ul>
        {rentalsData.map((rental) => (
          <li key={rental.id}>
            <Link to={`logement/${rental.id}`}>{rental.title}</Link>
          </li>
        ))}
      </ul> */}
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
    </main>
  );
}

export default Home;
