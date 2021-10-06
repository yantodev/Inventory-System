import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { PersistGate } from "redux-persist/lib/integration/react";
// import thunk from "redux-thunk";
import AllReducers from "./reducers";
// const persistConfig = {
//   key: "root",
//   storage: storage,
// };
// const persistedReducer = persistReducer(persistConfig, AllReducers);
const store = createStore(
  AllReducers,
  // persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// const persistor = persistStore(store);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
