import React from "react";
import { ThreeCircles } from 'react-loader-spinner' ;


const Spinner = () => {
    return(
        <div className="spinner">
              <ThreeCircles
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
        </div>
    )
}

export default Spinner