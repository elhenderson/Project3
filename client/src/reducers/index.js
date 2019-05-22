import {combineReducers} from 'redux';
import postReducer from './postReducer';

document.querySelector("#rCw").setAttribute('style', 'display:none');
const rootReducer = combineReducers({
    post: postReducer
})

export default rootReducer;