import { useContext,creatContext } from "react";

const context = createContext()

export const useParams=()=>{
    return useContext(context)
}

export const ParamsProvider = ({children}) => {

    return (<div>
        <context.Provider value={}>
            {children}
        </context.Provider>
    </div>)
}