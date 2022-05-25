import { createStore, combineReducers } from 'redux';
import { userReducer } from '../containers/LoginPage/LoginPage';
import { paymentReducer } from '../containers/MainPage/MainPage';
import { commonReducer } from './commonReducer';
import { confirmReducer } from './reducer/confirmReducer';

const rootReducer = combineReducers({ 
    Data : commonReducer
});
const Store = () => {
return createStore(rootReducer);
}
export default Store;