import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { profileReducer } from './store/reducers/ProfileReducers';
import MainNavigator from './src/navigator/MainNavigator';
 
const rootReducer = combineReducers({
  profileReducer,
});
 
const store = createStore(rootReducer);
 
const App = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <MainNavigator />
    </SafeAreaProvider>
  </Provider>
);
 
export default App;