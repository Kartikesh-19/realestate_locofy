import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import image from "../public/card-2@3x.png";
import image1 from "../public/card-3@3x.png";
import image2 from "../public/card-4@3x.png";
import image3 from "../public/card-5@3x.png";
import image4 from "../public/card-11@3x.png";
import Header from '../components/header'

let property_details = [
  {
    location: "910 Saint John St, Monroe, LA 71201",
    price_per_feet: "$6 price/sqft",
    overview:
      "6 bedroom home, one and half story home located within minutes of downtown monroe. This home has great potential. Schedule your showing today.",
    value: "25 listings",
    img: image,
    text: "Property Title 1", 
  },
  {
    location: "792, Spring Left Street, TDI 140061",
    price_per_feet: "$10 price/sqft",
    overview:
      "6 bedroom home, one and half story home located within minutes of downtown monroe. This home has great potential. Schedule your showing today.",
    value: "Testing phase",
    img: image1,
    text: "Property Title 2", 
  },
  {
    location: "302, Ket ,Dadhol Ghumarwin, Himachal Pardesh, 174023",
    price_per_feet: "$20 price/sqft",
    overview:
      "6 bedroom home, one and half story home located within minutes of downtown monroe. This home has great potential. Schedule your showing today.",
    value: "Testing phase",
    img: image2,
    text: "Property Title 2", 
  },
  {
    location: "Mohali India in Punjab India, 160301",
    price_per_feet: "$8 price/sqft",
    overview:
      "6 bedroom home, one and half story home located within minutes of downtown monroe. This home has great potential. Schedule your showing today.",
    value: "Testing phase",
    img: image3,
    text: "Property Title 2", 
  },
  {
    location: "Mohali India Near TDI, 160301",
    price_per_feet: "$15 price/sqft",
    overview:
      "6 bedroom home, one and half story home located within minutes of downtown monroe. This home has great potential. Schedule your showing today.",
    value: "Testing phase",
    img: image4,
    text: "Property Title 2", 
  },
];

const Details = () => {
  const router = useRouter();

  return (<>
    <Header hamburger={false} />
    <div className="flex flex-col py-6 px-4 md:px-8 items-center justify-center gap-6 text-center text-2xl text-primary-800 font-body-regular-600">
  <div className="flex flex-col items-center justify-center gap-4">
    <div className="relative text-4xl font-semibold text-center">House Details</div>
    <div className="relative text-xl text-lightslategray font-semibold text-center">$19,200</div>
  </div>
  <div className="flex flex-row flex-wrap py-0 px-2.5 box-border items-center justify-center max-w-6xl">
    <div className="flex flex-col items-center justify-start gap-4">
      <div className="flex flex-row items-start justify-center gap-4 lg:flex-row md:flex-col">
        {property_details.map((val, i) => (
          <Link
            href="/"
            key={i}
            className="cursor-pointer rounded-lg w-full max-w-[300px] bg-gray-200 shadow-md transition-transform duration-300 transform hover:scale-105"
          >
            <div className="p-4">
              <div className="relative">
                <Image src={val?.img} alt="" width={300} height={200} />
              </div>
              <div className="text-xl font-semibold mt-2">{val?.text}</div>
              <div className="text-base text-lightslategray mt-1">{val?.location}</div>
              <div className="text-lg font-semibold mt-1">{val?.price_per_feet}</div>
              <div className="text-base mt-1">{val?.overview}</div>
              <div className="text-base text-primary-600 mt-2">{val?.value}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
</div>
</>
);
};

export default Details;
