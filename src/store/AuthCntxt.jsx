import { useState } from "react";
import { AuthContext } from "./FirebaseContext";

// eslint-disable-next-line react/prop-types
export default function AuthCntxt({ children }) {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
