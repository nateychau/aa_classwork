import Game from './components/game.jsx'
import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener("DOMContentLoaded", () =>{
    const root = document.getElementById('root');
    console.log('in the entry file');
    ReactDOM.render(<Game/>, root);
})
