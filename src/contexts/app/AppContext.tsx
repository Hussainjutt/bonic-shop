import React, { createContext, useContext, useMemo, useReducer } from "react";
import {
  initialState,
  rootActionType,
  rootReducer,
} from "../../reducers/rootReducer";

const AppContext = createContext(null);

export const AppProvider: React.FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () =>
  useContext<{
    state: typeof initialState;
    dispatch: (args: rootActionType) => void;
  }>(AppContext);

export default AppContext;
