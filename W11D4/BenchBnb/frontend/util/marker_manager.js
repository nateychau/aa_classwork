export default class MarkerManager {
    constructor(map){
        this.map = map;
        this.markers = {};
    }

    updateMarkers(benches){
        const benchArr = Object.values(benches);
        console.log('before')
        console.log(this.markers);
        for(const idx in this.markers){
            if(!benches[idx]){
                this.removeMarker(this.markers[idx]);
                delete this.markers[idx];
            }
        }
        console.log('after')
        console.log(this.markers);
        benchArr.forEach(bench => {
            if(!this.markers[bench.id]){
                this.createMarkerFromBench(bench);
                console.log('created new marker');
                console.log(this.markers);
            }
        })
        
    }

    createMarkerFromBench(bench){
        const marker = new google.maps.Marker({
            position: { lat: bench.lat, lng: bench.lng},
            map: this.map 
        })
        this.markers[bench.id] = marker;
    }

    removeMarker(marker){
        marker.setMap(null);
        console.log('removed marker')
    }
}