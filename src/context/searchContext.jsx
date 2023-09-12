import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [active, setActive] = useState(false);

  const close = () => setActive(false);
  const open = () => setActive(true);

  return (
    <SearchContext.Provider value={{ active, close, open }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearchContext = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("Context is been used, at where Provider is not provided!");
  }

  return context;
};

export default useSearchContext;
