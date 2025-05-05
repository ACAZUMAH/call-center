import { combineReducers } from "@reduxjs/toolkit";
import settings from './settings/slice'
import authentication from './auth/slice'
import cart from './cart/slice'

const rootReducer = combineReducers({ settings, authentication, cart })

export default rootReducer