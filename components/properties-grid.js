import PropertyCard from "./property-card";

const PropertiesGrid = ({allProperties}) => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-center text-left text-[14.51px] text-gray-700 font-body-regular-600">
      <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[8px]">
        {allProperties.map((property)=>{
            return(
            <PropertyCard
              key={property?.id}
              imgUrl={property?.image}
              title={property?.title}
              name={property?.name}
              price={property?.price}
              />
              )
            })
        }
      </div>
    </div>
  );
};

export default PropertiesGrid;
