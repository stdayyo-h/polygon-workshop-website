import React, { useContext, useEffect, useState } from "react";
import { PopUpContext } from "../context/PopUpContext";

export const PopUp = (props) => {
  const { popUpState, popUpContentState } = useContext(PopUpContext);
  const [popUp, setPopUp] = popUpState;
  const [popUpContent, setPopUpContent] = popUpContentState;

  useEffect(() => {
    setTimeout(() => {
      setPopUp(false)
    }, 2000)
  }, [popUp]);
  return (
    <div
      className={`fixed  w-screen flex justify-center inset-x-0 bottom-20 z-[999] px-2 sm:px-0 ${popUp ? " block " : "hidden"}`}
      disabled={!popUp}
    >
      <div className="relative min-w-[300px] bg-violet-200  rounded-md	shadow-xl">
        <div className="z-[1000]">
          <div>
            {/* <h2 className="text-xl text-black font-semibold ">
              {popUpContent.heading}
            </h2> */}
            <p className=" text-lg font-bold text-black w-full text-center p-1 px-6">
              {popUpContent.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
