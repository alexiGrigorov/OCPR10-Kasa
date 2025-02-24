import { useRouteLoaderData } from "react-router-dom";

import HomeBanner from "../ui/HomeBanner";
import RentalsPreview from "../ui/RentalsPreview";

function Home() {
  const rentalsData = useRouteLoaderData("mainApp");

  return (
    <main className="max-w-screen w-full mi-auto p-i-pages">
      <HomeBanner />
      <RentalsPreview rentalsData={rentalsData} />
    </main>
  );
}

export default Home;
