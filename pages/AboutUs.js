import { useCallback } from "react";
import { useRouter } from "next/router";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.min.css";
import Header from '../components/header'

const AboutUs = () => {
  const router = useRouter();
  const onSearchCTAClick = useCallback(() => {
    router.push("/properties");
  }, [router]);

  return (<>
      <Header {...{hamburger:false}} />
    <div className="self-stretch flex flex-col py-[120px] px-[30px] items-center justify-start bg-[url(/hero-section@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-33xl text-gray-white font-body-regular-400">
      <div className="self-stretch flex flex-col items-center justify-end gap-[24px] md:max-w-full">
        {/* <div className="self-stretch relative leading-[72px] font-semibold">
          <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded overflow-hidden flex flex-row items-end justify-start">
                  <div className=" text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
                    Back
                  </div>
              </button>
        </div> */}
        <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-primary-50">
         
Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. Amazon strives to be Earth’s most customer-centric company, Earth’s best employer, and Earth’s safest place to work. Customer reviews, 1-Click shopping, personalized recommendations, Prime, Fulfillment by Amazon, AWS, Kindle Direct Publishing, Kindle, Career Choice, Fire tablets, Fire TV, Amazon Echo, Alexa, Just Walk Out technology, Amazon Studios, and The Climate Pledge are some of the things pioneered by Amazon.
        </div>
        
        <div className="self-stretch flex flex-col items-center justify-start gap-[16px] text-left text-base text-primary-700 font-body-regular-600">
          {/* <div className="flex flex-row items-start justify-start gap-[10px]">
            <button
              className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded overflow-hidden flex flex-row items-start justify-start"
              onClick={() => router.push("/properties")}
            >
              <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
                Rent
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-3 px-6 bg-gray-white rounded overflow-hidden flex flex-row items-start justify-start">
              <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-primary-400 text-center">
                Sale
              </div>
            </button>
          </div> */}
          {/* <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
            <div className="flex-1 rounded-lg bg-gray-white flex flex-row py-8 px-[62px] box-border items-center justify-between max-w-[1400px] md:w-[300px] md:flex-col md:gap-[20px] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
              <div className="w-[137px] flex flex-col items-start justify-start gap-[16px] text-center">
                <div className="relative leading-[24px] capitalize font-semibold">
                  Locations
                </div>
                <Dropdown
                  className="self-stretch"
                  overlay={
                    <Menu>
                      {[
                        { value: "New York" },
                        { value: "Los Angeles" },
                      ].map((option, index) => (
                        <Menu.Item key={index}>
                          <a onClick={(e) => e.preventDefault()}>
                            {option.value || ""}
                          </a>
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                  placement="bottomLeft"
                  trigger={["hover"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    {" Select your city"}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              
            </div>
          </div> */}
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
          <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-primary-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.
          </div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-primary-50">
            Morbi bibendum. Fusce nibh. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa.
          </div>
          <hr/>
            <div className="self-stretch relative text-xl leading-[28px] font-body-regular-800 text-primary-50">
            Our History
          </div>
          <div className="self-stretch relative text-sm leading-[28px] font-body-regular-600 text-primary-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.
          </div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-primary-50">
            Our Expertise
          </div>
          <div className="self-stretch relative text-sm leading-[28px] font-body-regular-600 text-primary-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.
          </div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-primary-50">
            Community Involvement
          </div>
          <div className="self-stretch relative text-sm leading-[28px] font-body-regular-600 text-primary-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.
          </div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-primary-50">
            Awards and Recognitions
          </div>
          <div className="self-stretch relative text-sm leading-[28px] font-body-regular-600 text-primary-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
