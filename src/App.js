import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoComponent from "./components/TodoComponent";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}></Provider>
      <PersistGate loading={null} persistor={persistor}>
        <TodoComponent />
      </PersistGate>
    </div>
  );
}

export default App;
