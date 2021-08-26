import { useState } from "react";
import ReactMapGL from "react-map-gl";
import { getCenter } from "geolib";

function Map({ searchResults }) {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  const coordinate = searchResults.map((result) => ({
    longtitude: searchResults.long,
    latitude: result.lat,
  }));

  const center = [];

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/hori0329/cksspt03v29t519p9qnwgelwc"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    ></ReactMapGL>
  );
}

export default Map;
