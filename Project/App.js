import { View, Text } from 'react-native'
import React from 'react'
import Router from './Screen/Navigation/Router'
import { Provider } from 'react-redux'
import store from './Redux/store'
const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App