import React, { Component } from 'react';
import firebase from 'firebase';
import Config from 'react-native-config';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

const config = {
  apiKey: Config.API_KEY,
  authDomain: Config.AUTH_DOMAIN,
  databaseURL: Config.DATABASE_URL,
  projectId: Config.PROJECT_ID,
  storageBucket: Config.STORAGE_BUCKET,
  messagingSenderId: Config.MESSAGING_SENDER_ID,
};

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(
      reducers,
      {},
      applyMiddleware(thunk),
    );
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
