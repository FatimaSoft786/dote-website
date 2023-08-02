import {createStore,compose,combineReducers,applyMiddleware} from 'redux';

import thunkMiddleware from 'redux-thunk';
import { authReducer } from './reducer/authReducer';
 import {messengerReducer} from './reducer/messangerReducer';

const rootReducer = combineReducers({
     auth: authReducer,
      messanger : messengerReducer
})

const middleware = [thunkMiddleware];

const store = createStore(rootReducer,compose(applyMiddleware(...middleware)));

export default store;