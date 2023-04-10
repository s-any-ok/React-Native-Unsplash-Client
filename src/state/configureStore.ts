import {Store, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {ApplicationState, createRootReducer, rootSaga} from './index';

export default function configureStore(
  initialState: ApplicationState | any,
): Store<ApplicationState> {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createRootReducer(),
    initialState,
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
