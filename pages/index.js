import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import AreaContainer from "../components/area-container";
import AreaFeatureCardContainer from "../components/area-feature-card-container";
import RentPropertiesForm from "../components/rent";
import RentPropertiesFilter from "../components/rent-properties-filter";
import Footer from "../components/footer";
import PropertiesGridView from "./properties";
import React,{useState,useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../redux/store';

const LandingPage = () => {
  const getContainerRef = React.useRef(null);
  const [details, setDetails]=useState([])
  useEffect(()=>{
    console.log('ref',getContainerRef?.current)
    const areaState = getContainerRef?.current?.getHeroStates();
    console.log('AreaContainer State from ParentComponent:', areaState,getContainerRef?.current?.getHeroStates(), getContainerRef?.current?.value);
    setDetails([...details, getContainerRef?.current?.getHeroStates()])

  },[getContainerRef?.current])
  console.log('===================>?.current',details)
  // const getHeroStates=()=>{
  //    if (getContainerRef.current) {
  //     alert('hy')
  //   }

  // }
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Discover your perfect home" />
      </Head>
      <div className="relative bg-gray-white w-full flex flex-col items-center justify-start">
        <Provider store={store}>
        <Header {...{hamburger:false}} />
        <Hero ref={getContainerRef}/>
        <AreaContainer />
        <AreaFeatureCardContainer />
        <RentPropertiesForm  {...{areaState:details}} />
        <RentPropertiesFilter />
        {/* <Contact /> */}
        {/* <PropertiesGridView/> */}
        <Footer />
        </Provider>
      </div>
    </>
  );
};

export default LandingPage;
