// import { color } from '@mui/system';
import React from 'react';
import Lottie from 'react-lottie';
import animationData from "../assets/lotties/loader2.json";

function LocalLoader(props) {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="absolute h-full w-full flex items-center justify-center">

      <Lottie
        options={defaultOptions}
        height={props.small ? 20 : 100}
        width={props.small ? 20 : 100}

        isStopped={false}
        isPaused={false}
      />
    </div>
  );
}

export default LocalLoader;