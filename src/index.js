import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import "./fonts/ERPyb/ERPyb.css";
import "./fonts/pinar/pinar.css";
import "./fonts/peyda/peyda.css";
import App from "./App";
import { ThemeProvider } from "@mui/system";
import theme from "./mui/theme";
import "react-toastify/dist/ReactToastify.css";


const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHCMS_URI,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      {/* <ThemeProvider theme={theme}> */}
        <App />
      {/* </ThemeProvider> */}
    </BrowserRouter>
  </ApolloProvider>
);
