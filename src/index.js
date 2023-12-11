import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { queryClient } from "./Util/Http";
import { QueryClientProvider } from "@tanstack/react-query";

import store from "./store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
