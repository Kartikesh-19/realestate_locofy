import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import AreaContainer from "../components/area-container";
import AreaFeatureCardContainer from "../components/area-feature-card-container";
import RentPropertiesForm from "../components/rent";
import RentPropertiesFilter from "../components/rent-properties-filter";
import Contact from "../components/contact";
import Footer from "../components/footer";
import PropertiesGridView from "./properties";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Discover your perfect home" />
      </Head>
      <div className="relative bg-gray-white w-full flex flex-col items-center justify-start">
        <Header hamburger={false} />
        <Hero />
        <AreaContainer />
        <AreaFeatureCardContainer />
        <RentPropertiesForm />
        <RentPropertiesFilter />
        <Contact />
        {/* <PropertiesGridView/> */}
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
