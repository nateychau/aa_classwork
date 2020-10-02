import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer.js'

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState);
} 

export default configureStore; 