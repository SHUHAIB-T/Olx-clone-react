import { createContext, useState } from "react";
export const postContext = createContext();

// eslint-disable-next-line react/prop-types
export default function Post({ children }) {
  const [postDetails, setPostDetails] = useState();
  return (
    <postContext.Provider value={{ postDetails, setPostDetails }}>
      {children}
    </postContext.Provider>
  );
}
