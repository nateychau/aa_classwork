//API KEY: f8e4263c52475af1bfc92930bd6236ba
//url: api.openweathermap.org/data/2.5 / weather ? lat = { lat } & lon={ lon }& appid={ API key }
import React from 'react';

class Weather extends React.Component{
    constructor(){
        super();
        this.state = {lat: "", lon: "", temp: "", location: ""}
        this.getWeather = this.getWeather.bind(this);
        // this.getWeather();
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition((data)=>{
            const pos = data.coords;
            this.setState({lat: pos.latitude, lon: pos.longitude}, this.getWeather);
        })
    }

    getWeather() {
        console.log(this.state.lat, this.state.lon);
        const request = new XMLHttpRequest();
        request.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&APPID=f8e4263c52475af1bfc92930bd6236ba&units=imperial`, true);
        let that = this;
        request.onload = function() {
            // debugger
            // if (this.status >= 200 && this.status < 400) {
            //     // Success!
            const resp = JSON.parse(this.response);
            that.setState({temp: resp.main.temp, location: resp.name});
            // } else {
            //     // We reached our target server, but it returned an error
            //     alert("unable to get weather")
            //     }
         };

        request.send();
    }

    render() {
        return (
            <div>
                <h1>Weather:</h1>
                <h1>{this.state.temp}</h1>
                <br/>
                <h1>Location:</h1>
                <h1>{this.state.location}</h1>
            </div>
        )
    }
}


export default Weather;