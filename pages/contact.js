let contact_states={
  fname:null,
  lname:null,
  email:null,
  textArea:null
}
import React from 'react';
import Header from '../components/header'
const Contact = () => {
  const [state, setState]=React.useState(contact_states)
  function handleChange(key, val){
    setState({...state,[key]:val}) 
  }
  return (
    <>
      <Header {...{hamburger:false}} />
    <div className="self-stretch bg-primary-50 flex flex-row flex-wrap py-[86px] px-[5px] items-start justify-center text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="flex-1 flex flex-col py-0 px-2.5 box-border items-center justify-start gap-[40px] max-w-[900px]">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Contact us
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch rounded-xl bg-gray-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col py-7 px-[30px] items-center justify-start gap-[17px] text-left text-5xl text-darkslategray font-poppins">
          <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
            <b className="self-stretch relative leading-[36px]">Enquiry Form</b>
            <div className="self-stretch relative text-lg leading-[30px] font-roboto text-slategray">
              Are you looking for details about a certain property? Ask us a
              question using the form below.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
            <input
              className="font-roboto text-base bg-[transparent] self-stretch rounded flex flex-col py-4 px-3 items-start justify-start border-[1px] border-solid border-gray"
              type="text"
              value={state?.fname}
              onChange={(e)=>handleChange('fname',e.target.value )}
              placeholder="First name"
              maxLength={100}
              minLength={2}
            />
            <input
             className="font-roboto text-base bg-[transparent] self-stretch rounded flex flex-col py-4 px-3 items-start justify-start border-[1px] border-solid border-gray"
              type="text"
              value={state?.lname}
                 onChange={(e)=>handleChange('lname',e.target.value )}
              placeholder="Last name"
              maxLength={100}
              minLength={2}
            />
            <input
              className="font-roboto text-base bg-[transparent] self-stretch rounded flex flex-col py-4 px-3 items-start justify-start border-[1px] border-solid border-gray"
              type="email"
              value={state?.email}
              onChange={(e)=>handleChange('email',e.target.value )}
              placeholder="Email id"
              required
            />
            <textarea
              className="bg-[transparent] h-[105px] font-roboto text-base self-stretch rounded box-border flex flex-col p-3 items-start justify-start border-[1px] border-solid border-gray"
              value={state?.textArea}
              onChange={(e)=>handleChange('textArea',e.target.value )}
              placeholder="Comments or questions"
              required
              rows={10}
            />
            <button className="cursor-pointer [border:none] p-0 bg-primary-500 rounded w-[222px] h-[46px] flex flex-col items-center justify-center">
              <div className="relative text-base font-roboto text-gray-white text-center inline-block w-[203.12px]">
                Submit
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
