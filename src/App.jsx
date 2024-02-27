import React from "react";
import store from "./store/store";
import Products from "./Products";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Products />
      </Provider>
    </div>
  );
};

export default App;
