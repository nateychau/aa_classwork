import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index'

export default ({benches, fetchBenches}) => {
    return (
        <div>
            <BenchMap/>
            <BenchIndex benches={benches} fetchBenches={fetchBenches}/>
        </div>
    )
}