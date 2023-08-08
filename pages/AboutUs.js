import { useCallback } from "react";
import { useRouter } from "next/router";
import "antd/dist/antd.min.css";
import Header from '../components/header'

const AboutUs = () => {

  return (
  <>
  <Header hamburger={false} />
  <div className="flex flex-col py-[400px] px-[30px] items-center justify-start bg-[url(/hero-section@3x.png)] bg-cover bg-no-repeat bg-top text-center text-33xl text-gray-white font-body-regular-400">
    <div className="flex flex-col items-center justify-end gap-[24px] md:max-w-full bg-black bg-opacity-50 p-5 rounded-lg">
      <div className="relative leading-[48px] font-semibold text-white">
        About Us
      </div>
      <hr className="border-t border-primary-50 my-4" />
      <div className="flex flex-col items-center justify-start gap-[24px] text-white">
        <div className="relative text-xl leading-[28px] font-body-regular-800 text-primary-50">
          Our History
        </div>
        <div className="relative text-sm leading-[28px] font-body-regular-600 text-primary-50">
          Real estate has been an important part of Indian society for centuries, with a rich and diverse history. The evolution of the real estate industry in India can be traced back to ancient times when land was considered one of the most valuable assets, owned by the ruling class and wealthy landowners.
        </div>
        <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-primary-50">
            Our Expertise
           </div>
           <div className="self-stretch relative text-sm leading-[28px] font-body-regular-600 text-primary-50">
            Compass is building the first modern real estate platform, pairing the industry’s top talent with technology to make the search and sell experience intelligent and seamless.
           </div>
           <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-primary-50">
             Community Involvement
           </div>
           <div className="self-stretch relative text-sm leading-[28px] font-body-regular-600 text-primary-50">
           When people achieve a certain level of success, they want to share it with other members of the community, help others and make the world a better place. It can be safely said that being a respectful real estate agent or having your own real estate business is already a big milestone and perfectly fits in the aforementioned frame. People often give money to one of the charity funds, write a check and consider themselves done. While donating money to an honorable cause is amazing, it’s not the only way of community involvement.
           </div>
           <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-primary-50">
             Awards and Recognitions
           </div>
         <div className="self-stretch relative text-sm leading-[28px] font-body-regular-600 text-primary-50">
            What is the Economic Times Real Estate Conclave Awards?
            Real Estate Awards and Conclave North Zone | ET RealEstate
             The Economic Times Real Estate Conclave & Awards 2022 | NORTH aims to bring top real estate stakeholders on a common platform and discuss what the industry, government, banks, financial institutions and other stakeholders need to do in order for real estate to bounce back and the awards recognizes and rewards.
          </div>
      </div>
    </div>
  </div>
</>
);
};

export default AboutUs;
