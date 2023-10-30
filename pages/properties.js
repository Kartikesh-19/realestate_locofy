import "antd/dist/antd.min.css";
import { Pagination, Dropdown,Menu } from "antd";
import {DownOutlined} from "@ant-design/icons";
import Header from "../components/header";
import PropertiesGrid from "../components/properties-grid";
import Footer from "../components/footer";
import {createClient} from '@supabase/supabase-js'
import React,{ useEffect, useState } from "react";

const defaultOrder=[
  {
    key:'1',
    label:(
      <a onClick={(e)=>e.preventDefaut()}>
        Popular Properties
      </a>
    )
  },
  {
    key:'2',
    label:(
      <a onClick={(e)=>e.preventDefaut()}>
        Latest Properties
      </a>
    )
  },
  {
    key:'3',
    label:(
      <a onClick={(e)=>e.preventDefaut()}>
        Recommended Properties
      </a>
    )
  }
];

const PropertiesGridView = () => {
  const client =createClient(process.env.NEXT_PUBLIC_URL,process.env.NEXT_PUBLIC_KEY)
  let propertiesPerPage=10;
  const [properties, setProperties]=useState([])
   const [currentPage, setCurrentPage] = useState(1);
  useEffect(()=>{
    const fetchProperties = async () => {
      const offset = (currentPage - 1) * propertiesPerPage;
      const { data, error } = await client
        .from("properties")
        .select("*")
        .limit(propertiesPerPage)?.range(offset, offset + propertiesPerPage - 1);
      console.log("🚀 ~ file: properties.js:49 ~ fetchProperties ~ data:", data)

      if (error) {
        console.error("Error fetching properties:", error);
        return;
      }

      setProperties(data);
    };

    fetchProperties();

  },[currentPage])
  const [sortBy, setSortBy]=useState('')
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="bg-gray-white w-full flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-400">
      <Header hamburger={false} />
      <div className="self-stretch h-60 flex flex-col items-center justify-center bg-[url(/category@3x.png)] bg-cover bg-no-repeat bg-top">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="leading-[72px] font-semibold">
            Properties
          </div>
          <div className="text-base leading-[24px] text-whitesmoke-200 font-body-regular-600">
            <span>{`Home / `}</span>
            <span className="font-medium text-gray-white">Properties</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-16 pb-2 items-center justify-start gap-[95px] text-left text-base text-gray-black font-body-regular-600 lg:pl-[120px] lg:pr-[120px] sm:pl-5">
        <div className="flex flex-row items-center justify-start">
          <div className="flex flex-wrap flex-row items-end justify-start gap-[16px]">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <img className="w-6 h-6" alt="" src="/listbullets.svg" />
              <img className="w-6 h-6" alt="" src="/squaresfour.svg" />
            </div>
            <div className="leading-[24px]">Sort by:</div>
            <Dropdown
                  className="self-stretch"
                  overlay={
                    <Menu>
                      {[
                        { value: "Name" },
                        { value: "Date" },                       
                      ].map((option, index) => (
                        <Menu.Item key={index}>
                          <a onClick={(e) => {e.preventDefault(); setSortBy(option?.value)}}>
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
                    { !sortBy? `Default Order`:sortBy}
                    <DownOutlined />
                  </a>
                </Dropdown>
          </div>
        </div>
        <PropertiesGrid allProperties={properties} />
        <div className="flex flex-row items-end justify-center gap-[8px] text-center text-primary-500">
         <Pagination
          current={currentPage}
          pageSize={propertiesPerPage}
          total={14}
          onChange={handlePageChange}
         />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default PropertiesGridView;
