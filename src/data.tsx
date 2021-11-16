import React, {createContext, useContext} from "react";

const DataContext = createContext(null)

export const DataProvider = ({ children, data }) => <DataContext.Provider value={data}>{children}</DataContext.Provider>;

export function useData() {
  const ctx = useContext(DataContext);
  if (ctx && ctx.read) {
    ctx.read();
  }

  return {};
}