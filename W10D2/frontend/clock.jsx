import React from "react"

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            time: new Date() 
        }
        this.tick = this.tick.bind(this)
    }
    //toLocaleTimeString()
    //toDateString()

    tick() {
        this.setState ({ time: new Date() })
    }

    componentDidMount() {
       this.interval = setInterval(this.tick,1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render(){
        return (
            <div className='clock'>
                <h2 className='clock-heading'>Clock</h2>
                {/* <br/> */}
                <div className='time'>
                    <h3>Time:</h3>
                    <div>{this.state.time.toLocaleTimeString()}</div>
                </div>
                <div className='date'>    
                    {/* <br/> */}
                    <h3>Date:</h3>
                    <div>{this.state.time.toDateString()}</div>
                    {/* <br/> */}
                </div>
            </div>
        )
    }
}

export default Clock; 