import Banner from "./Banner";
import CategorySlider from "./CategorySlider";
import Contacts from "./Contacts";
import Featured from "./Featured";
import OurMenu from "./OurMenu";
import Recommends from "./Recommends";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <CategorySlider />
      <OurMenu />
      <Contacts />
      <Recommends />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
