import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index'

export default ({benches, fetchBenches, updateBounds}) => {
    return (
        <div>
            <BenchMap benches={benches} updateBounds={updateBounds}/>
            <BenchIndex benches={benches} fetchBenches={fetchBenches}/>
        </div>
    )
}