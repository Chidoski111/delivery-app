import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/HeroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2" id="home">
      <div className="py-2 flex-1 flex flex-col items-start md:items-center  justify-center gap-6 ">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 rounded-full bg-white overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery In
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>{" "}
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%] ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus porro,
          eligendi ratione iure qui fuga nisi officiis praesentium sunt fugiat
          consectetur cupiditate at dolorum harum reiciendis ipsa autem?
          Voluptas, consequatur.
        </p>
        <button
          type="button"
          className=" bg-gradient-to-br from-orange-500 w-ful px-4 py-2 rounded-lg
         hover:shadow-lg transition-all ease-in-out duration-100 md:items-center lg:mr-auto"
        >
          Order Now{" "}
        </button>
      </div>

      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className="ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="HeroBg"
        />
        <div
          className="w-full h-full absolute top-0 left-0 
       flex py-4 items-center justify-center gap-4 flex-wrap lg:px-32"
        >
          {heroData && heroData.map(n =>(
         <div key={n.id}
         className=" lg:w-190 p-2 min-w-[190px] bg-cardOverlay backdrop-blur-md
     rounded-3xl flex items-center flex-col justify-center drop-shadow-lg"
       >
         <img src={n.imageSrc} className="w-20 lg:w-40 -mt-10 lg:-mt-20 " alt="I1" />
         <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4"> {n.name}</p>
         <p className="text-[12px] text-sm text-lighttextGray font-semibold my-1 lg:my-3">
           {n.decp}
         </p>
         <p className="text-sm font-semibold text-headingColor">
           <span className="text-xs text-red-600">$</span>{n.price}
         </p>
       </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
