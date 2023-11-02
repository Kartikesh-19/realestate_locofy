import PropertyRentCard from "./property-rent-card";
import React,{useState} from 'react'

const RentPropertiesFilter = ({areaState}) => {
  console.log('areaState',areaState)
  let backgoundImage=[
   {propBackgroundImage:`url("/card-21@3x.png")`},
   {propBackgroundImage:`url("/card-31@3x.png")`},
   {propBackgroundImage:`url("/card-41@3x.png")`},
   {propBackgroundImage:`url("/unsplashrlwe8f8anoc7@2x.png")`},

   {propBackgroundImage:`url("/card-21@3x.png")`},
   {propBackgroundImage:`url(/unsplashrlwe8f8anoc8@2x.png)`},
   {propBackgroundImage:`url("/card-31@3x.png")`},
   {propBackgroundImage:`url("/card-41@3x.png")`},
  

   {propBackgroundImage:`url("/card-21@3x.png")`},
   {propBackgroundImage:`url("/card-31@3x.png")`},
   {propBackgroundImage:`url("/unsplashrlwe8f8anoc8@2x.png")`},
   {propBackgroundImage:`url("/card-41@3x.png")`},

   {propBackgroundImage:`url("/unsplashrlwe8f8anoc10@2x.png")`},
   {propBackgroundImage:`url("/card-21@3x.png")`},
   {propBackgroundImage:`url("/card-31@3x.png")`},
   {propBackgroundImage:`url("/card-41@3x.png")`},
  ]
  const [displayMoreImg, setDisplayMoreImg]=useState(4)
  const loadMoreListing=(e)=>{
    e.preventDefault();
    setDisplayMoreImg(displayMoreImg + 4)
  }
  return (
    <div className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px] text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px]">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Filtered Properties of Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] text-left text-base text-gray-white">
          <PropertyRentCard />
         {backgoundImage.slice(0,displayMoreImg).map(val=><PropertyRentCard propBackgroundImage={val?.propBackgroundImage} />)}
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start" onClick={(e)=>{backgoundImage.length && loadMoreListing(e)}} 
      disabled={displayMoreImg===20?true:false}>
        <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
          Load more listing
        </div>
      </button>
    </div>
  );
};

export default RentPropertiesFilter;
