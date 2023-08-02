import { useMemo,useState } from "react";

const InfoCard = ({ homeSaleRentId, homeSaleRentText, propWidth }) => {
  const [showMoreContent, setShowMoreContent]=useState(false)
  const sellYourHomeStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] flex flex-col p-[22px] box-border items-start justify-start min-w-[300px] max-w-[340px] text-center text-5xl text-gray-700 font-body-regular-600"
      style={sellYourHomeStyle}
    >
      <div className="flex flex-col items-start justify-start gap-[24px]">
        <img
          className="relative w-[78px] h-[78px] overflow-hidden shrink-0"
          alt=""
          src={homeSaleRentId}
        />
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <div className="relative leading-[32px] font-semibold">
            {homeSaleRentText}
          </div>
        {showMoreContent ? <div className="relative text-base leading-[24px] text-lightslategray text-left flex items-end w-[268px]">
            We do a free evaluation to be sure you want to start selling.
          </div>:<div className="relative text-base leading-[24px] text-lightslategray text-left flex items-end w-[268px]">
           We do a free evaluation to be sure you want to start selling. Download this Premium Photo about Contract for the sale of a new home (lorem ipsum - fake text), and discover more than 28 Million Professional Stock Photos 
          </div>}
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[24px] font-body-regular-600 text-primary-500 text-left inline-block"     onClick={()=>{setShowMoreContent(!showMoreContent)}} >
           {  showMoreContent?   "Read more":"Read less"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
