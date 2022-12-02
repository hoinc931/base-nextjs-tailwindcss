import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { compose } from 'redux';

import testSlice from 'redux/reducers/testSlice'

export default function configureAppStore(preloadedState = {}) {
  const composeEnhancers = compose;

  const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));

  const store = configureStore({
    reducer: {
      demo: testSlice,
    },
    preloadedState,
    enhancer,
  });

  return store;
}