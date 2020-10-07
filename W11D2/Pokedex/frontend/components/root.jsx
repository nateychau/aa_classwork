import React from 'react';
import {Provider} from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container'
import { HashRouter, Route } from "react-router-dom";

const Root = ({store}) => {
    return (
        <Provider store={store}>
            <HashRouter>
                <Route path='/' component={PokemonIndexContainer}></Route>
            </HashRouter>
        </Provider>
    )
}

export default Root;