import { combineReducers } from 'redux';
import SpotFormReducer from './spot_form_reducer';

const entitiesReducer = combineReducers({
    spotForm: SpotFormReducer
});

export default entitiesReducer;