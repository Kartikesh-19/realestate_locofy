import { useCallback,useState, } from "react";
import "antd/dist/antd.min.css";
import { Menu, Dropdown, Button } from "antd";
import {
  DownOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import Header from '../components/header'

const Ouragents = () => {
  const router = useRouter();
  const onSearchCTAClick = useCallback(() => {
    router.push("/properties");
  }, [router]);

  return (
  <>
  <Header hamburger={false} />
  <div className=" self-stretch flex flex-col py-[120px] px-[30px] items-center justify-start bg-[url(/unsplashrlwe8f8anoc10@2x.png)] bg-cover bg-no-repeat bg-[top] text-center text-33xl text-gray-white font-body-regular-400 ">
    <div className="flex flex-col items-center justify-end gap-[24px] md:max-w-full bg-black bg-opacity-50 p-8 rounded-lg">
      <div className="relative leading-[48px] font-semibold text-white">
       Our Agents
      </div>
      <hr className="border-t border-primary-50 my-4" />
      <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
            <div className="self-stretch relative text-xl leading-[28px] font-body-regular-800 text-primary-50">
            Start with the prospect, not with you.
            </div>
           <div className="self-stretch relative text-sm leading-[28px] font-body-regular-600 text-primary-50">
           It’s tempting to begin your ABOUT page with your credentials. But that is actually a turn-off for most prospects. It’s like meeting someone at a dinner party and beginning the conversation by talking about yourself.
           Your ABOUT page should talk about the prospect first. Here’s an example…
           If you’re like many South Georgetown homeowners, you’re concerned about selling in today’s unpredictable market. But you don’t have to be. For 5 years, I’ve been a top   seller in the area. I know the nuances of this market and how to sell your home quickly and for the best price.
           </div>
           <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-primary-50">
             Turn features into benefits.
           </div>
           <div className="self-stretch relative text-sm leading-[28px] font-body-regular-600 text-primary-50">
           Your ABOUT page is like any other selling page. You need to talk about benefits. So whenever you mention something about yourself, make sure you also explain what that means to prospects.A simple way to do this is to start a sentence with “That means”. For example…
           I’ve helped more than 200 clients buy and sell homes. That means I know exactly how to make the process go smoothly for you.
           </div>
           <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-primary-50">
           List your “stand out” credentials.
           </div>
            <div className="self-stretch relative text-sm leading-[28px] font-body-regular-600 text-primary-50">
          If you have credentials — years of experience, awards, sales track record, etc. — that differentiate you from other agents, put those in a bullet list. That way, they’ll stand out.
            </div>
            <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-primary-50">
          Close with a call-to-action.
            </div>
            <div className="self-stretch relative text-sm leading-[28px] font-body-regular-600 text-primary-50">
              Even though your ABOUT page is not supposed to be a strong-selling HOME page or SERVICES page, you should still include a soft call-to-action. Think about what you want prospects to do next, and then invite them to do so. For example…”
              If you’re looking for a real estate agent with the best track record selling in South Georgetown, let’s talk.
              Those four simple tips will have a big impact on your ABOUT page. Follow them the next time you’re writing or tweaking your website copy.
            </div>
        </div>
    </div>
  </div>
</>

  );
};

export default Ouragents;
