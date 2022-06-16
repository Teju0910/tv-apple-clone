import Banner from "./Banners/Banner";
import { Footer } from "./Footer/Footer";
import MiniBanner from "./MiniBanner/MiniBanner";
import { CardCarousel } from "./MiniCard/CardCarousel";

function Home() {
  return (
    <div>
      <Banner />
      <CardCarousel />
      <CardCarousel />
      <CardCarousel />
      <MiniBanner />
      <CardCarousel />
      <Footer />
    </div>
  );
}

export default Home;
