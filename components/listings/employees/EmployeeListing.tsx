import React, { useEffect } from 'react';
import CardUI from '../../ui/CardUI';
import FormUI from '../../ui/FormUI';
import EmployeeListingItem from './EmployeeListingItem';
import { useEmployees } from '../../../context/EmployeesContext';

const EmployeeListing = ({ initialEmployees }) => {
    const { employees, setEmployees } = useEmployees();

    useEffect(() => {
        setEmployees(initialEmployees);
    }, []);

    return (
        <CardUI>
            <FormUI headerText="Employees">
                <div className="w-full divide-y">
                    <div className="grid grid-cols-5 pb-2 font-bold text-grey-medium">
                        <p>Name</p>
                        <p>Email</p>
                        <p>Position</p>
                        <p>Role</p>
                        <p>Actions</p>
                    </div>
                    <div className="divide-y">
                        {employees.map((employee) => (
                            <EmployeeListingItem
                                employee={employee}
                                key={employee.id}
                            />
                        ))}
                    </div>
                </div>
            </FormUI>
        </CardUI>
    );
};

export default EmployeeListing;
