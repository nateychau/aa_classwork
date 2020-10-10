import React from 'react'
import MarkerManager from '../util/marker_manager'

export default class BenchMap extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        // set the map to show SF
        const mapOptions = {
          center: { lat: 37.7758, lng: -122.435 }, // this is SF
          zoom: 13
        };
    
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.benches);
        this.map.addListener("idle", (e)=>{
            let latlngbound = this.map.getBounds();
            let northEast = latlngbound.getNorthEast().toJSON();
            let southWest = latlngbound.getSouthWest().toJSON();
            let bounds = {"northEast": northEast, "southWest": southWest};
            this.props.updateBounds(bounds);
        })
    }

    componentDidUpdate(){
        this.MarkerManager.updateMarkers(this.props.benches);
    }

    render(){
        return (
            <div id='map-container' ref={ map => this.mapNode = map}>
                {/* <div id='map-container' ref='map'>
                </div> */}
            </div>
        )
    }
}