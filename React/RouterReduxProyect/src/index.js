import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { createStore } from 'redux'

import App from './routes/App'
import reducer from './reducers'
import { InitialState } from '../initialSatate'

const store = createStore(reducer, InitialState)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)

