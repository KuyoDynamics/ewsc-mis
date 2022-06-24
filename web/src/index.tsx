import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import App from "./App";
import { Countries } from "./routes/countries";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import NotFound from "./components/404";
import Login from "./routes/login";
import { AuthProvider } from "./components/authentication/auth-provider";
import { RequireAuth } from "./components/authentication/require-auth";

const client = new ApolloClient({
  uri: "/api",
  cache: new InMemoryCache(),
  headers: {
    authorization: localStorage.getItem("token") || "",
  },
});

const container = document.getElementById("root");

const root = createRoot(container!);

root.render(
  <ApolloProvider client={client}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route
                  index
                  element={
                    <RequireAuth>
                      <App />
                    </RequireAuth>
                  }
                />
                <Route path="login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </LocalizationProvider>
  </ApolloProvider>
);
