import React,{ useCallback,useState,forwardRef,useImperativeHandle } from "react";
import "antd/dist/antd.min.css";
import { Menu, Dropdown, Button } from "antd";
import hero_states from "./constants";
import {
  DownOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import {useDispatch, useSelector} from 'react-redux'
import {setImages} from '../redux/Slices/HandleSlice'
import Select from 'react-select';


const Hero =forwardRef((props,ref) => {
  // console.log('================ref',ref)
  const router = useRouter();
  const dispatch=useDispatch()
  const images=useSelector(state=> state.data)
  console.log('===============>5678',images)
  // const areaContainerRef = useRef();
  const [state,setState]=useState(hero_states)
  const onSearchCTAClick = useCallback(() => {
    // router.push("/properties");
    
    
  }, [router]);
  function searchQuery(query){
    // location:null,
    // property_type:null,
    // rent_range:null,
        let images=[
            { imgUrl:"/unsplashrlwe8f8anoc7@2x.png",
            name:'91 Allium Place, Orlando fl 32456',
            price:'10000'},
             {imgUrl:"/unsplashrlwe8f8anoc9@2x.png",
            name:'792 Near Tdi , Mohali 160001',
            price:'10000'},
             {imgUrl:"/unsplashrlwe8f8anoc8@2x.png",
            name:'Omega, Near Kharar Punjab fl 32456',
            price:'591,632'},
            {imgUrl:"/unsplashrlwe8f8anoc8@2x.png",
            name:'91 Allium Place, Orlando fl 32456',
            price:'591,632'},

            {imgUrl:"/unsplashrlwe8f8anoc9@2x.png",
            name:'91 Allium Place, Orlando fl 32456',
            price:'10000'},
            {imgUrl:"/unsplashrlwe8f8anoc10@2x.png",
            name:'91 Allium Place, Orlando fl 32456',
            price:'10000'},
            { imgUrl:"/unsplashrlwe8f8anoc7@2x.png",
            name:'91 Allium Place, Orlando fl 32456',
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
            price:'10000'},
            {imgUrl:"/unsplashrlwe8f8anoc8@2x.png",
            name:'91 Allium Place, Orlando fl 32456',
            price:'591,632'},
            {imgUrl:"/unsplashrlwe8f8anoc8@2x.png",
            name:'91 Allium Place, Orlando fl 32456',
            price:'591,632'},
           {imgUrl:"/unsplashrlwe8f8anoc8@2x.png",
            name:'91 Allium Place, Orlando fl 32456',
            price:'591,632'},
            {imgUrl:"/unsplashrlwe8f8anoc9@2x.png",
            name:'91 Allium Place, Orlando fl 32456',
            price:'591,632'},
            { imgUrl:"/unsplashrlwe8f8anoc7@2x.png",
            name:'91 Allium Place, Orlando fl 32456',
            price:'591,632'},
  ];
  

    const keywords=query?.value
    console.log('==================>keywords', keywords)
    const result =images.filter((image)=>{
      console.log('image===============>',image)
      for(let i=1;i<images.length; i++){
        if(image.price.includes(keywords)){
          // alert('hy')
         return true;
        }
      }
    return false;
    })
    console.log('=-=-=-=->',result)
    dispatch(setImages(result))
     scrollTo(3700, 2000)
  }
  const scrollTo = (to, duration) => {
  const start = window.pageYOffset;
  const change = to - start;
  let currentTime = 0;
  const increment = 20;

  const animateScroll = function () {
    currentTime += increment;
    const val = Math.easeInOutQuad(currentTime, start, change, duration);
    window.scrollTo(0, val);
    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  animateScroll();
};
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};
  const handleUpdate=(key,val)=>{
    console.log('=============>',key,val )
   setState({...state, [key]:val});
  }
  useImperativeHandle(ref, () => (
  {getHeroStates: () => state}
  ),[state]);


  return (
    <div className="self-stretch flex flex-col py-[120px] px-[30px] items-center justify-start bg-[url(/hero-section@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-33xl text-gray-white font-body-regular-400">
      <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
          <div className="self-stretch relative leading-[72px] font-semibold">
            Find Your Dream Home
          </div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-primary-50">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[17px] text-left text-base text-primary-700 font-body-regular-600">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded overflow-hidden flex flex-row items-start justify-start" 
            onClick={()=>router.push('/properties')}
            >
              <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
                Rent
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-3 px-6 bg-gray-white rounded overflow-hidden flex flex-row items-start justify-start"
            
            >
              <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-primary-400 text-center">
                Sale
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
            <div className="flex-1 rounded-lg bg-gray-white flex flex-row py-8 px-[62px] box-border items-center justify-between max-w-[1400px] md:w-[300px] md:flex-col md:gap-[20px] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
              <div className="w-[137px] flex flex-col items-start justify-start gap-[16px] text-center">
                <div className="relative leading-[24px] capitalize font-semibold">
                  Locations
                </div>
                <Select
                value={state?.location}
                onChange={(val)=>{handleUpdate('location',val)}}
                options={[
                                { value: "New York", label:'New York' },
                                { value: "Los Angeles",label:'Los Angeles'},
                                
                              ]}
      />
                  {/* <Dropdown
                  className="self-stretch"
                  overlay={
                    <Menu>
                      {[
                        { value: "New York" },
                        { value: "Los Angeles"},
                        
                      ].map((option, index) => (
                        <Menu.Item key={index}>
                          <a onClick={(e) =>{ e.preventDefault();handleUpdate('location',option?.value)}}>
                            {option.value || ""}
                          </a>
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                  placement="bottomLeft"
                  trigger={["hover"]}
                > 
                  <a onClick={(e) => {e.preventDefault()}}>
                    {state?.location || ` Select your city`}
                    <DownOutlined />
                  </a>
                </Dropdown>*/}
              </div>
              <div className="w-[177px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative leading-[24px] capitalize font-semibold flex items-end w-[150px]">
                  Property Type
                </div>
                <Select
                    value={state?.property_type}
                    onChange={(val)=>{handleUpdate('property_type',val)}}
                    options={[
                        // { value: "New York", label:'New York' },
                        // { value: "Los Angeles",label:'Los Angeles'},
                        { value: "Studio apartments" ,label:'Studio apartments'},
                        { value: "One-bedroom apartments",label:'One-bedroom apartments' },
                        { value: "Two-bedroom apartments" ,label:'Two-bedroom apartments'},
                        { value: "Three-bedroom apartments",label:'Three-bedroom apartments' },
                        { value: "Four or more bedroom apartments/houses",label:"Four or more bedroom apartments/houses" }
                        
                      ]}
      />
                {/* <Dropdown
                  className="self-stretch"
                  overlay={
                    <Menu>
                      {[
                        { value: "Studio apartments" },
                        { value: "One-bedroom apartments" },
                        { value: "Two-bedroom apartments" },
                        { value: "Three-bedroom apartments" },
                        { value: "Four or more bedroom apartments/houses" },
                      ].map((option, index) => (
                        <Menu.Item key={index}>
                          <a onClick={(e) => {e.preventDefault();
                          handleUpdate('property_type',option?.value)
                            // setState({...state, property_type:option.value});
                            }}>
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
                    {state?.property_type|| `Select Property type`}
                    <DownOutlined />
                  </a>
                </Dropdown> */}
              </div>
              <div className="w-[155px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative leading-[24px] capitalize font-semibold flex items-end w-[150px]">
                  Rent Range
                </div>
                {/* <Dropdown
                  className="self-stretch"
                  overlay={
                    <Menu>
                      {[
                        { value: "2000" },
                        { value: "10000" },
                        { value: "10000+" },
                      ].map((option, index) => (
                        <Menu.Item key={index}>
                          <a onClick={(e) => {e.preventDefault();
                           handleUpdate('rent_range',option?.value)
                            // setState({...state, rent_range:option.value});
                            }}>
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
                    {state?.rent_range|| `Select rent range`}
                    <DownOutlined />
                  </a>
                </Dropdown> */}
                <Select
                  value={state?.rent_range}
                  onChange={(val)=>{handleUpdate('rent_range',val)}}
                  options={[
                        // { value: "New York", label:'New York' },
                        // { value: "Los Angeles",label:'Los Angeles'},
                        { value: "2000", label:'2000' },
                        { value: "10000",label:'10000' },
                        { value: "10000+" ,label:'10000+'}
                        
                      ]}
      />
              </div>
              <button
                className="cursor-pointer [border:none] py-3 px-6 bg-seagreen rounded w-[102px] flex flex-row box-border items-center justify-center hover:bg-steelblue lg:hover:bg-steelblue"
                onClick={()=>{onSearchCTAClick();searchQuery(state?.rent_range)}}
              >
                <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
                  Search
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
})

export default Hero;
