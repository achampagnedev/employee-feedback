import React, { useContext, useState } from 'react';
import { Employee } from '../types';

const EmployeesContext = React.createContext(null);

export function ProvideEmployees({ children }) {
    const employeesValue = useProvideEmployees();
    return (
        <EmployeesContext.Provider value={employeesValue}>
            {children}
        </EmployeesContext.Provider>
    );
}

export function useEmployees() {
    return useContext(EmployeesContext);
}

function useProvideEmployees() {
    const [employees, setEmployees] = useState<Employee[]>([]);

    return { employees, setEmployees };
}
