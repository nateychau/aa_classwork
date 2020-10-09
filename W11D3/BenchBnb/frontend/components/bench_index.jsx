import React from 'react'
import BenchIndexItem from './bench_index_item'

export default class BenchIndex extends React.Component { 
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchBenches();
    }

    render(){
        let benchArr = this.props.benches ? Object.values(this.props.benches).map((bench)=>{
            return <BenchIndexItem key={bench.id} bench={bench}/>
        }) : []
        return (
            <div>
                <h3>All Benches</h3>
                <ul>
                    {benchArr}
                </ul>
            </div>
        )
    }
}