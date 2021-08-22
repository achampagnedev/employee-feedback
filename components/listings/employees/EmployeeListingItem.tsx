import React, { useState } from 'react';
import Icon from '../../icons/Icon';
import { USER_ROLE_OPTIONS } from '../../../constants';
import { useEmployees } from '../../../context/EmployeesContext';
import { User } from 'next-auth';
import Select from 'react-select';

const EmployeeListingItem = ({
    employee,
    isAdmin,
    currentUser,
}: {
    employee: {
        id: string;
        name: string;
        email: string;
        role: string;
        roleLabel: string;
        position: string;
    };
    isAdmin: boolean;
    currentUser: User;
}) => {
    const [editable, setEdit] = useState(false);
    const [newName, setNewName] = useState(employee.name);
    const [newEmployee, setNewEmployee] = useState(employee);
    const [newPosition, setNewPosition] = useState(employee.position);
    const [newRole, setNewRole] = useState(employee.role);
    const [newRoleLabel, setNewRoleLabel] = useState(employee.roleLabel);
    const { employees, setEmployees } = useEmployees();

    const deleteEmployee = async () => {
        let confirmDelete = prompt("Type 'DELETE' to confirm deletion");

        if (confirmDelete === null) return;

        await fetch(`/api/employees/${employee.id}`, {
            method: 'DELETE',
        })
            .then(async (response) => {
                const result = await response.json().then((result) => result);
                if (result.error) return alert(result.error);
                const newEmployees = employees.filter(
                    (employee) => employee.id !== result.id
                );
                setEmployees(newEmployees);
            })
            .catch((e) => console.error(e));
    };

    const editEmployee = () => {
        setEdit(true);
    };

    const updateEmployee = async () => {
        await fetch(`/api/employees/${employee.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                newName,
                newPosition,
                newRole,
                newRoleLabel,
            }),
        })
            .then(async (response) => {
                const result = await response.json().then((result) => result);
                if (result.error) return alert(result.error);
                setNewEmployee(result);
                setEdit(false);
            })
            .catch((e) => console.error(e));
    };

    return (
        <div
            className={`grid flex items-center ${
                isAdmin ? 'grid-cols-12' : 'grid-cols-11'
            } py-2 mt-1 h-12 text-sm ${
                currentUser.email === employee.email ? 'font-bold' : ''
            }`}
        >
            {!editable ? (
                <>
                    <p className="col-span-3">{newName}</p>
                    <p className="col-span-3">{newEmployee.email}</p>
                    <p className="col-span-3">{newPosition}</p>
                    <p className="col-span-2">{newRoleLabel}</p>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        value={newName}
                        className="col-span-3 text-grey-night text-sm flex-grow rounded-[3px] p-2 mr-2 border disabled:opacity-50 disabled:bg-off-white"
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    <p className="col-span-3">{newEmployee.email}</p>
                    <input
                        type="text"
                        value={newPosition}
                        className="col-span-3 text-grey-night text-sm flex-grow rounded-[3px] p-2 mr-2 border disabled:opacity-50 disabled:bg-off-white"
                        onChange={(e) => setNewPosition(e.target.value)}
                    />
                    <Select
                        menuPortalTarget={document.querySelector('body')}
                        options={USER_ROLE_OPTIONS}
                        onChange={(e) => {
                            setNewRole(e.value);
                            setNewRoleLabel(e.label);
                        }}
                        className="col-span-2 text-sm flex-grow rounded-sm disabled:opacity-50 mr-2 disabled:bg-off-white"
                    />
                </>
            )}
            {isAdmin && (
                <div
                    className={`flex pl-2 ${
                        currentUser.email === employee.email
                            ? 'pointer-events-none opacity-30'
                            : ''
                    }`}
                >
                    <div
                        className="w-5 h-5 cursor-pointer"
                        onClick={!editable ? editEmployee : updateEmployee}
                    >
                        <Icon name={!editable ? 'Edit' : 'Save'} />
                    </div>
                    <div
                        className="w-5 h-5 ml-3 cursor-pointer"
                        onClick={deleteEmployee}
                    >
                        <Icon name="Trash" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmployeeListingItem;
