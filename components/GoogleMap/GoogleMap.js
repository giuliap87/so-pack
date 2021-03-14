import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";
import styles from "./GoogleMap.module.scss";


const center = {
  lat: 48.864716,
  lng: 2.349014,
}

const apiKey = "AIzaSyAZp8gxQ9Qe4Sg0A_PfdaoXOMu6YRjo2C0";

function Map() {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap center={center} zoom={10} mapContainerClassName={styles.map} />
    </LoadScript>
  );
}

export default React.memo(Map);
