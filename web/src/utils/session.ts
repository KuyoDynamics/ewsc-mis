import { setContext } from "@apollo/client/link/context";
import { isLoggedInVar } from "../cache";

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

function observeTokenForExternalChanges() {
  window.addEventListener("storage", ({ key }) => {
    if (key === "token" || !key) {
      localStorage.removeItem("token");
      isLoggedInVar(false);
    }
  });
}

function logout() {
  localStorage.removeItem("token");
  isLoggedInVar(false);
}

function setToken(token: string) {
  localStorage.setItem("token", token);
  isLoggedInVar(true);
}

export { logout, setToken, authLink, observeTokenForExternalChanges };
