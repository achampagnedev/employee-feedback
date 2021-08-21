import React, { useEffect } from 'react';
import CardUI from '../../ui/CardUI';
import FormUI from '../../ui/FormUI';
import EmployeeListingItem from './EmployeeListingItem';
import { useEmployees } from '../../../context/EmployeesContext';
import { useSession } from 'next-auth/client';
import LoaderUI from '../../ui/LoaderUI';

const EmployeeListing = ({ initialEmployees, isAdmin, currentUser }) => {
    const [session, loading] = useSession();
    const { employees, setEmployees } = useEmployees();

    useEffect(() => {
        setEmployees(initialEmployees);
    }, [initialEmployees, setEmployees]);

    return (
        <>
            {loading && (
                <div className="p-4">
                    <LoaderUI />
                </div>
            )}
            {employees.length > 0 && !loading && (
                <CardUI>
                    <FormUI headerText="Employees">
                        <div className="w-full divide-y">
                            <div
                                className={`grid ${
                                    isAdmin ? 'grid-cols-5' : 'grid-cols-4'
                                } py-2 mt-1 text-grey-medium font-bold`}
                            >
                                <p>Name</p>
                                <p>Email</p>
                                <p>Position</p>
                                <p>Role</p>
                                {isAdmin && <p>Actions</p>}
                            </div>
                            <div className="divide-y">
                                {employees.map((employee) => (
                                    <EmployeeListingItem
                                        employee={employee}
                                        isAdmin={isAdmin}
                                        currentUser={currentUser}
                                        key={employee.id}
                                    />
                                ))}
                            </div>
                        </div>
                    </FormUI>
                </CardUI>
            )}
            {employees.length === 0 && !loading && (
                <p className="flex justify-center text-2xl text-grey-medium pt-8">
                    {isAdmin
                        ? 'There are no employees yet. Click "Add Employee" to create your first employee.'
                        : 'There are no employees yet.'}
                </p>
            )}
        </>
    );
};

export default EmployeeListing;
