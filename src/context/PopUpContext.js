import React, { useState, createContext } from "react";

export const PopUpContext = createContext();

export const PopUpContextProvider = (props) => {
  const [popUp, setPopUp] = useState(true);
  const [popUpContent, setPopUpContent] = useState({ heading: "", description: "" });
  // const [content, setContent] = useState({title:"Registration",desc:"payment successfull",comp:<div>hello</div>});
  return (
    <PopUpContext.Provider
      value={{
        popUpState: [popUp, setPopUp],
        popUpContentState: [popUpContent, setPopUpContent],
        // contentState:[content,setContent],
      }}
    >
      {props.children}
    </PopUpContext.Provider>
  );
};
