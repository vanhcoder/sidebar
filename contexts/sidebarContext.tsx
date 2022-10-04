import { useContext , createContext , useReducer} from "react";

export  const initialState = {
  isCollapsible : false,
};

export const siderbarContext = createContext<unknown>();

const SideBarReducer = (state:any, action:any) => {

    switch (action.type) {
      case 'toggle':
        return {
          ...state,
          isCollapsible: !state.isCollapsible,
        };
      case 'nextPage':
        return {
          ...state,
          isCollapsible: state.isCollapsible,
        };
    }
}

export const SidbarWrapper = ({ children }:any) => {    
    const [data, dispatch] = useReducer(SideBarReducer, initialState);
    return (
        <siderbarContext.Provider value={[data, dispatch]}>
            {children}
        </siderbarContext.Provider>
    );
}


