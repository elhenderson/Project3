import {combineReducers} from 'redux';
import postReducer from './postReducer';
import userReducer from './userReducer';
document.querySelector("#rCw").setAttribute('style', 'display:none');
const rootReducer = combineReducers({
    post: postReducer
})

export default rootReducer;