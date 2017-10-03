/**
 * Created by Bien on 2017-10-01.
 */
import { combineReducers } from 'redux';
import authReducer from './authReducer';


export default combineReducers({
    auth: authReducer
});