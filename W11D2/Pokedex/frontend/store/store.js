import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducers';
import { logger } from 'redux-logger';
import { myThunk } from '../middleware/thunk';

const configureStore = (preloadedState = {}) => createStore(rootReducer, applyMiddleware(myThunk, logger));

export default configureStore;