import React from "react";
import GoogleMapReact from 'google-map-react';
import {ReactComponent as Pin} from '../SVGs/pin.svg';




export default function Maps(){

  const [currlocation, setCurrLocation] = React.useState([0,0]);
  const [finalLocation, setFinalLocation] = React.useState([0,0]);
  const AnyReactComponent = () => <div><Pin/></div>;
  const defaultProps = {
    center: {
      lat: 30.043929,
      lng: 31.236125
    },
    zoom: 11
  };

  function onBoundsChange(bounds){
    setCurrLocation(bounds);
  }
  const onClick = () => {
    setFinalLocation(currlocation);
  }

  return (
    <div style={{ height: '100%', width: '100%', position:"relative" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD59YY6PcR25dpkpXmyJ-0y_cCkUJYWamI" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onBoundsChange={onBoundsChange}
      >
        
        {finalLocation[0] !== 0 && finalLocation[1] !== 0 && <AnyReactComponent
          lat={finalLocation[0]}
          lng={finalLocation[1]}
          text="My Location"
        />}
      </GoogleMapReact>
      <div className="h-full w-full absolute top-44 left-44">
        <Pin/>
      </div>
      <button
        onClick={onClick}
        >Test</button>
    </div>
  );
}