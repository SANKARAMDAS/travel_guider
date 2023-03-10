import React from "react";
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery} from "@material-ui/core";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab'

import useStyles from './styles'

const Map = () => {

    const coordinates = {
      lat: 0 ,
        lng: 0
    };
    const classes =useStyles();
    const isMobile = useMediaQuery('(min-width: 600px)');
  return (
      <div className={classes.mapContainer}>
         <GoogleMapReact
             bootstrapURLKeys={{key: 'AIzaSyBFunsUmQ7N12nT29zMLRFg_srd0dtHSUo'}}
             defaultCenter={coordinates}
             center={coordinates}
             defaultZoom={14}
             margin={[50,50,50,50]}
             options={''}
             onChange={}
             onChildClick={}
         >

         </GoogleMapReact>
      </div>
  )
}

export default Map