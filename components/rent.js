import PropertyCard from "./property-card";
import React,{useState} from 'react'

const RentPropertiesForm = () => {
  let images=[
            { imgUrl:"/unsplashrlwe8f8anoc7@2x.png",
            name:'91 Allium Place, Orlando fl 32456',
            price:'591,632'},
            {imgUrl:"/unsplashrlwe8f8anoc8@2x.png",
            name:'91 Allium Place, Orlando fl 32456',
            price:'591,632'},
            {imgUrl:"/unsplashrlwe8f8anoc9@2x.png",
            name:'91 Allium Place, Orlando fl 32456',
            price:'591,632'},
            {imgUrl:"/unsplashrlwe8f8anoc10@2x.png",
            name:'91 Allium Place, Orlando fl 32456',
            price:'591,632'},

            {imgUrl:"/unsplashrlwe8f8anoc8@2x.png",
            name:'91 Allium Place, Orlando fl 32456',
            price:'591,632'},
            {imgUrl:"/unsplashrlwe8f8anoc10@2x.png",
            name:'91 Allium Place, Orlando fl 32456',
            price:'591,632'},
            {imgUrl:"/unsplashrlwe8f8anoc10@2x.png",
            name:'91 Allium Place, Orlando fl 32456',
            price:'591,632'},
            { imgUrl:"/unsplashrlwe8f8anoc7@2x.png",
            name:'91 Allium Place, Orlando fl 32456',
            price:'591,632'},

            {imgUrl:"/unsplashrlwe8f8anoc8@2x.png",
            name:'91 Allium Place, Orlando fl 32456',
            price:'591,632'},
            {imgUrl:"/unsplashrlwe8f8anoc10@2x.png",
            name:'91 Allium Place, Orlando fl 32456',
            price:'591,632'},
            {imgUrl:"/unsplashrlwe8f8anoc8@2x.png",
            name:'91 Allium Place, Orlando fl 32456',
            price:'591,632'},
            { imgUrl:"/unsplashrlwe8f8anoc7@2x.png",
            name:'91 Allium Place, Orlando fl 32456',
            price:'591,632'},

            {imgUrl:"/unsplashrlwe8f8anoc8@2x.png",
            name:'91 Allium Place, Orlando fl 32456',
            price:'591,632'},
           { imgUrl:"/unsplashrlwe8f8anoc7@2x.png",
            name:'91 Allium Place, Orlando fl 32456',
            price:'591,632'},
            {imgUrl:"/unsplashrlwe8f8anoc8@2x.png",
            name:'91 Allium Place, Orlando fl 32456',
            price:'591,632'},
            { imgUrl:"/unsplashrlwe8f8anoc7@2x.png",
            name:'91 Allium Place, Orlando fl 32456',
            price:'591,632'},
  ]
  const [displayCount, setDisplayCount] = useState(4); 
  const loadMoreListings = (e) => {
    e.preventDefault();
    setDisplayCount(displayCount + 4); // Load 4 more images
  };
  return (
    <form className="self-stretch flex flex-col items-center justify-start gap-[39px]">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative text-21xl leading-[48px] font-semibold font-body-regular-600 text-primary-800 text-center">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-lightslategray text-center">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap py-0 px-2.5 items-center justify-center gap-[32px]">
          {images.slice(0, displayCount).map((val)=><PropertyCard imgUrl={val?.imgUrl} name={val?.name}price={val?.price}/>)}
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start"
        onClick={(e)=>{loadMoreListings(e)}}
        >
        <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
          Load more listing
        </div>
      </button>
    </form>
  );
};

export default RentPropertiesForm;
