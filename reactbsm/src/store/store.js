import {configureStore} from '@reduxjs/toolkit';
import reducer from '../reducer/menureducer';
import loginReducer from "../reducer/loginReducer";

export const store = configureStore({
    reducer: {
        menuReducer: reducer,
        loginReducer: loginReducer
    }
});
