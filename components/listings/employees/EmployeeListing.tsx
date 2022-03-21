import React, { useEffect } from 'react';
import CardUI from '../../ui/CardUI';
import FormUI from '../../ui/FormUI';
import EmployeeListingItem from './EmployeeListingItem';
import { useEmployees } from '../../../context/EmployeesContext';
import { useSession } from 'next-auth/client';
import LoaderUI from '../../ui/LoaderUI';
import { Employee } from '../../../types';
import { User } from 'next-auth';

interface Props {
    initialEmployees: Employee[];
    isAdmin: boolean;
    currentUser: User;
}

const EmployeeListing: React.FC<Props> = ({
    initialEmployees,
    isAdmin,
    currentUser,
}) => {
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
                    <FormUI
                        headerText="Employees"
                        mobileNote="(scroll horizontally for content)"
                    >
                        <div className="overflow-x-scroll">
                            <div className="divide-y w-[768px] md:w-auto">
                                <div
                                    className={`grid ${
                                        isAdmin
                                            ? 'grid-cols-12'
                                            : 'grid-cols-11'
                                    } py-2 mt-1 text-grey-medium font-bold`}
                                >
                                    <p className="col-span-3">Name</p>
                                    <p className="col-span-3">Email</p>
                                    <p className="col-span-3">Position</p>
                                    <p className="col-span-2">Role</p>
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
                        </div>
                    </FormUI>
                </CardUI>
            )}
            {employees.length === 0 && !loading && (
                <p className="flex justify-center text-2xl text-grey-medium pt-8">
                    {isAdmin
                        ? 'There are no employees yet. Click "Create Employee" to create your first employee.'
                        : 'There are no employees yet.'}
                </p>
            )}
        </>
    );
};

export default EmployeeListing;
