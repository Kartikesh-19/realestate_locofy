let obj={
home:"HOME",
about_us:"ABOUT US",
our_agents:"OUR AGENTS",
properties:"PROPERTIES",
gallery:"GALLERY",
blog:"BLOG",
contact:"CONTACT US",
// search:"SEARCH",
}
import Link from 'next/link'
import {useRouter} from 'next/router'
import React,{useState} from 'react';
 export const handleRouter=(key)=>{
      switch(key){
        case "home":
        return "/";
        case "about_us":
         return "AboutUs";
        case "our_agents":
        return "/Ouragents";
        case "properties":
        return "/properties";
        case "gallery":
         return "/gallery";
        case "blog":
        return "/blog";
        case "contact":
         return "/contact";
        // case "search":
        //  return "/search";
         default:
      return "/";
      }
    }
const Header = ({ hamburger}) => {
  const router=useRouter();
  const [count, setCount]=useState(0)
    const [activeClass , setActiveClass]=useState(false)
    const handleTabs=(key,val)=>{
      setActiveClass(true); 
      setCount(val); 
      let route=handleRouter(key)
      router.push(route)
    }
   
  return (
    <header className="self-stretch bg-gray-white h-[98px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] [background:white] z-[2] text-center text-5xl text-primary-500 font-body-regular-600 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <div className="flex-1 flex flex-row items-center justify-between">
        <Link href="/" className="flex flex-row items-center justify-center gap-[8px]">
          <img className="relative w-11 h-11" alt="" src="/houseline.svg" />
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[24px] font-semibold">REIS</div>
            <div className="relative text-sm leading-[16px] font-medium">
              Real State
            </div>
          </div>
        </Link>
        <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-primary-900 sm:flex">
          <div className="flex flex-row items-start justify-start gap-[30px] lg:hidden">
            {Object.keys(obj).map((key,val)=>{
             return (
             <div className={ `leading-[22px] ${
             activeClass && count===val
            ? "font-semibold":""}`} 
            onClick={()=>{handleTabs(key,val)}}
            >{obj[key]}
            </div>
            )})}
          </div> 
          {!hamburger && (
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] hidden flex-row items-center justify-center lg:flex">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 md:flex"
                alt=""
                src="/notification.svg"
              />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
