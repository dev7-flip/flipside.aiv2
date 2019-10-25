import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class map extends React.Component {
    state = {
        lat: 14.611393,
        lng: 121.079942,
        zoom: 16,
      }

      openPopup (marker) {
        if (marker && marker.leafletElement) {
          window.setTimeout(() => {
            marker.leafletElement.openPopup()
          })
        }
      }
    
      render() {
        const position = [this.state.lat, this.state.lng]


        return (
          <Map className="flip-map" center={position} zoom={this.state.zoom} scrollWheelZoom={false}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}  ref={this.openPopup}>
              <Popup>
               Hello There!. <br /> We are Flipside.
              </Popup>
            </Marker>
          </Map>
        )
      }
}

export default map;