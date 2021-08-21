import React, { useState } from 'react';
import Icon from '../../icons/Icon';
import { COLORS, USER_ROLE_OPTIONS } from '../../../constants';
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
                isAdmin ? 'grid-cols-5' : 'grid-cols-4'
            } py-2 mt-1 h-12 text-sm ${
                currentUser.email === employee.email ? 'font-bold' : ''
            }`}
        >
            {!editable ? (
                <>
                    <p>{newName}</p>
                    <p>{newEmployee.email}</p>
                    <p>{newPosition}</p>
                    <p>{newRoleLabel}</p>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        value={newName}
                        className="text-grey-night text-sm flex-grow rounded-[3px] p-2 mr-2 border disabled:opacity-50 disabled:bg-off-white"
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    <p>{newEmployee.email}</p>
                    <input
                        type="text"
                        value={newPosition}
                        className="text-grey-night text-sm flex-grow rounded-[3px] p-2 mr-2 border disabled:opacity-50 disabled:bg-off-white"
                        onChange={(e) => setNewPosition(e.target.value)}
                    />
                    <Select
                        menuPortalTarget={document.querySelector('body')}
                        options={USER_ROLE_OPTIONS}
                        onChange={(e) => {
                            setNewRole(e.value);
                            setNewRoleLabel(e.label);
                        }}
                        className="text-sm flex-grow rounded-sm disabled:opacity-50 mr-2 disabled:bg-off-white"
                    />
                </>
            )}
            {isAdmin && (
                <div
                    className={`flex pl-2 ${
                        isAdmin ? 'grid-cols-5' : 'grid-cols-4'
                    } ${
                        currentUser.email === employee.email
                            ? 'pointer-events-none opacity-30'
                            : ''
                    }`}
                >
                    <div
                        className="w-5 h-5 cursor-pointer"
                        onClick={!editable ? editEmployee : updateEmployee}
                    >
                        {!editable && (
                            <Icon
                                name="Edit"
                                color={COLORS.GREY_MEDIUM}
                                hoverTextColor="text-grey-dark"
                            />
                        )}
                        {editable && (
                            <Icon
                                name="Save"
                                color={COLORS.GREY_MEDIUM}
                                hoverTextColor="text-grey-dark"
                            />
                        )}
                    </div>
                    <div
                        className="w-5 h-5 ml-3 cursor-pointer"
                        onClick={deleteEmployee}
                    >
                        <Icon
                            name="Trash"
                            color={COLORS.GREY_MEDIUM}
                            hoverTextColor="text-grey-dark"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmployeeListingItem;
