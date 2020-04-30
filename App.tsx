import React from 'react';
import { Provider } from 'react-redux';
import { Scene, Router, Stack } from 'react-native-router-flux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/store';
import Home from './src/screens/Home/HomeScreen';
import LoginPage from './src/screens/Login/LoginScreen';
import AuthLoadingScreen from './src/screens/AuthLoading/AuthLoadingScreen';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Stack key="root">
          <Scene hideNavBar key="auth" component={AuthLoadingScreen} initial={true} />
          <Scene hideNavBar key="login" component={LoginPage} title="Login" />
          <Scene hideNavBar key="home" component={Home} title="Home" />
        </Stack>
      </Router>
      
    </PersistGate>
  </Provider>
);

export default App;
