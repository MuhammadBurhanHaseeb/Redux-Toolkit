import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './slices/accountSlice.js'
import bonusReducer from './slices/bonusSlice.js'
import {Provider} from 'react-redux'
import rewardReducer from './redducers/reward.js'

// import {createStore , combineReducers , applyMiddleware } from 'redux'
// import logger from 'redux-logger';
// import {thunk} from 'redux-thunk';
// import {accountReducer} from './redducers/account.js'
// import { bonusReducer } from './redducers/bonus.js'

// import {Provider} from 'react-redux'

// this is for react-redux 
// const store = createStore(
//   combineReducers({account:accountReducer ,
//                        bonus : bonusReducer}) ,
//                         applyMiddleware(logger , thunk));


// this for redux/toolkit 
const store = configureStore({
  reducer:{
    account:accountReducer,
    bonus:bonusReducer,
    reward : rewardReducer,
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App store = {store} /> */}

    {/* react-redux ki librray provider  */}
    <Provider store = {store}>
    <App />
    </Provider>

    


  </StrictMode>,
)
