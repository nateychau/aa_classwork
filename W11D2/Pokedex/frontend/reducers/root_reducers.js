import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducers';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer
})

export default rootReducer