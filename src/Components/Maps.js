import React, { useEffect } from "react";
import GoogleMapReact from 'google-map-react';
import {ReactComponent as Pin} from '../SVGs/pin.svg';
import {ReactComponent as Pointer} from '../SVGs/pointer.svg';

export default function Maps(props){

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

  function randomizeL(){
    var long = Math.round((Math.random()*(30-32)+32) * 1000000)/1000000
    var lat = Math.round((Math.random()*(31-28)+28) * 1000000)/1000000
    console.log(long)
    console.log(lat)
    setFinalLocation([lat,long])
  }

  useEffect(()=>{
    if (props.isStaticMap){
      randomizeL();
    }
  },[])

  function onBoundsChange(bounds){
    setCurrLocation(bounds);
  }
  const onClick = () => {
    
    setFinalLocation(currlocation);
  }

  return (
    <div className="h-[200px] w-full relative">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "GOOGLEMAPSKEY" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onBoundsChange={onBoundsChange}
        
        options={
          props.isStaticMap?
          {scrollwheel: false,
          disableDefaultUI: true,
          draggable: false,
          keyboardShortcuts: false}
        : 
          undefined
        }
      >
        {props.isStaticMap === false ?
          <div>
            {finalLocation[0] !== 0 && finalLocation[1] !== 0 && <AnyReactComponent
              lat={finalLocation[0]}
              lng={finalLocation[1]}
            />}
          </div>
        :
        <div></div>
        }
      </GoogleMapReact>
      {props.isStaticMap === false?
       <div className="absolute top-16 left-40 ml-14 mt-10">
        <Pointer/>
        <p
        onClick={onClick}
        className=" bg-slate-700 bg-opacity-50 px-2 rounded-md text-white cursor-pointer"
        >
        {props.Location} Location
        </p>
      </div>
      :
      <div className="absolute top-16 left-40">
        <Pin/>
        <p
        className=" bg-slate-700 bg-opacity-50 px-2 rounded-md text-white"
        >
          {props.Location} Location
        </p>
      </div>
      }
      
    </div>
  );
}
