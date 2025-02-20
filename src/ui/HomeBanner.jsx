import Banner from "../components/Banner";
import Img from "../assets/images/accueil.png";

function HomeBanner() {
  return (
    <Banner
      image={Img}
      name="slogan"
      textClassName="text-neutral-100 text-bold font-size-slogan text-balance"
    >
      Chez vous, partout et ailleurs
    </Banner>
  );
}

export default HomeBanner;
