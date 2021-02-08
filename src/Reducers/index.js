import {combineReducers} from 'redux';
import basketReducer from './basket';
import mainFilterReducer from './mainFilter';
import subFilterReducer from './subFilter';
import memeDisplay from './memeDisplay';

const allReducers = combineReducers ({
    mainFilter : mainFilterReducer,
    subFilter : subFilterReducer,
    basket : basketReducer,
    memeDisplay : memeDisplay

})

export default allReducers