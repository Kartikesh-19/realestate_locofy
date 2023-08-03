import { useCallback } from "react";
import { useRouter } from "next/router";
import "antd/dist/antd.min.css";
import Header from '../components/header'

const AboutUs = () => {

  return (<>
      <Header {...{hamburger:false}} />
    <div className="self-stretch flex flex-col py-[120px] px-[30px] items-center justify-start bg-[url(/hero-section@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-33xl text-gray-white font-body-regular-400">
      <div className="self-stretch flex flex-col items-center justify-end gap-[24px] md:max-w-full">
        <div className="self-stretch relative leading-[48px] font-semibold">
          About Us
        </div>     
          <hr/>
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
            <div className="self-stretch relative text-xl leading-[28px] font-body-regular-800 text-primary-50">
                Our History
            </div>
          <div className="self-stretch relative text-sm leading-[28px] font-body-regular-600 text-primary-50">
           Real estate has been an important part of Indian society for centuries, with a rich and diverse history. The evolution of the real estate industry in India can be traced back to the ancient times when land was considered as one of the most valuable assets, and was owned by the ruling class and wealthy landowners.
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
