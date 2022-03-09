import { View } from 'react-native'
import React from 'react'
import Router from './Navigation/Router'
import {Provider} from 'react-redux'
import store from './Redux/Store'
const App = () => {
  return (
    <Provider store={store}>
      <Router/>
      </Provider>
  );
}

export default App