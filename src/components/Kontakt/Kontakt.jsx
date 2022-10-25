import Info from "./Info";
import FormEl from "./Form";

// import { MapContainer } from "https://cdn.esm.sh/react-leaflet/MapContainer";
// import { TileLayer } from "https://cdn.esm.sh/react-leaflet/TileLayer";
// import { useMap } from "https://cdn.esm.sh/react-leaflet/hooks";

function Kontakt(props) {
  return (
    <div className="contact">
      <div className="container">
        <Info />
        <FormEl />
      </div>
      <div className="location">
        <h2>Location</h2>
        {/* <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer> */}
        ,
      </div>
    </div>
  );
}

export default Kontakt;
