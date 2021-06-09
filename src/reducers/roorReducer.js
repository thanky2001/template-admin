import {combineReducers} from 'redux';
import infomations from './reducer/infomations';
import chatsReducer from './reducer/chatsReducer';
import userReducer from './reducer/userReducer';



const rootReducer = combineReducers({
    infomations,
    chatsReducer,
    userReducer
})

export default rootReducer;