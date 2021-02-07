import {combineReducers} from 'redux';
import basketReducer from './basket';
import mainFilterReducer from './mainFilter';
import subFilterReducer from './subFilter';

const allReducers = combineReducers ({
    mainFilter : mainFilterReducer,
    subFilter : subFilterReducer,
    basket : basketReducer
})

export default allReducers