import React from 'react'

export default ({bench}) => (
    <>
        <li>Description: {bench.description}</li>
        <li>Latitude: {bench.lat}</li>
        <li>Longitude: {bench.lng}</li>
    </>
)