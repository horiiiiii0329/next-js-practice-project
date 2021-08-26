import { useState } from "react";
import ReactMapGL from "react-map-gl";
import { getCenter } from "geolib";

function Map({ searchResults }) {
  const coordinate = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinate);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
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
