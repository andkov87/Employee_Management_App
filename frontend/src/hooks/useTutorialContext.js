import { createContext, useContext, useState } from "react";

const EmployeeContext = createContext();

export const useEmployeeContext = () => {
    return useContext(EmployeeContext);
}

export const EmployeeProvider = ({children}) => {
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    return (
        <EmployeeContext.Provider value={{selectedEmployee, setSelectedEmployee}}>
            {children}
        </EmployeeContext.Provider>
    )
}
