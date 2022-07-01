// import * as React from "react";
// import { User } from "../../../graphql/generated";

// interface AuthContextType {
//   user: User;
//   isAuthenticated
// }

// let AuthContext = React.createContext<AuthContextType>(null!);

// function AuthProvider({ children }: { children: React.ReactNode }) {
//   let [user, setUser] = React.useState<any>(null);

//   let value = { user };

//   return <AuthContext.Provider value={value}>{children} </AuthContext.Provider>;
// }

// function useAuth() {
//   return React.useContext(AuthContext);
// }

// export { AuthProvider, useAuth };
