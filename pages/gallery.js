let images=[
            { imgUrl:"/unsplashrlwe8f8anoc7@2x.png",
            name:'91 Allium Place, Orlando fl 32456',
            price:'591,632'},
            {imgUrl:"/unsplashrlwe8f8anoc9@2x.png",
            name:'792 Near Tdi , Mohali 160001',
            price:'591,632'},
             {imgUrl:"/unsplashrlwe8f8anoc8@2x.png",
            name:'Omega, Near Kharar Punjab fl 32456',
            price:'591,632'},
            {imgUrl:"/unsplashrlwe8f8anoc10@2x.png",
            name:'Aura, Near Kharar Punjab fl 32456',
            price:'591,632'},
            { imgUrl:"/unsplashrlwe8f8anoc7@2x.png",
            name:'Anshal, Near Kharar Punjab fl 32456',
            price:'591,632'},
             {imgUrl:"/unsplashrlwe8f8anoc8@2x.png",
            name:'Shivjot, Near Kharar Punjab fl 32456',
            price:'591,632'},
            {imgUrl:"/unsplashrlwe8f8anoc10@2x.png",
            name:'Shivalik, Near Kharar Punjab fl 32456',
            price:'591,632'},
  ]
import PropertyCard from "../components/property-card";
import Header from '../components/header'
const PropertiesGrid = () => {
  return (
     <>
       <Header {...{hamburger:false}} />
    <div className="self-stretch flex flex-row flex-wrap items-start justify-center text-left text-[14.51px] text-gray-700 font-body-regular-600">
      <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[8px]">
        {images.map((property)=>{
            return(
            <PropertyCard
              key={property?.id}
              imgUrl={property?.imgUrl}
              title={property?.title}
              name={property?.name}
              price={property?.price}
              />
              )
            })
        }
      </div>
    </div>
    </>
  );
};

export default PropertiesGrid;