import React from 'react';
import Icon from '../../icons/Icon';
import { COLORS } from '../../../constants';
import { useEmployees } from '../../../context/EmployeesContext';

const EmployeeListingItem = ({
    employee,
}: {
    employee: {
        id: string;
        name: string;
        email: string;
        role: string;
        roleLabel: string;
        position: string;
    };
}) => {
    const { employees, setEmployees } = useEmployees();

    const deleteEmployee = async () => {
        let confirmDelete = prompt("Type 'DELETE' to confirm deletion");

        if (confirmDelete === null) return;

        await fetch('/api/employees', {
            method: 'DELETE',
            body: JSON.stringify({ id: employee.id }),
        })
            .then(async (response) => {
                const result = await response.json().then((result) => result);
                const newEmployees = employees.filter(
                    (employee) => employee.id !== result.id
                );
                setEmployees(newEmployees);
            })
            .catch((e) => console.error(e));
    };

    return (
        <div className="grid grid-cols-5 py-2 mt-1 text-sm">
            <p>{employee.name}</p>
            <p>{employee.email}</p>
            <p>{employee.position}</p>
            <p>{employee.roleLabel}</p>
            <div>
                <div
                    className="w-5 h-5 cursor-pointer"
                    onClick={deleteEmployee}
                >
                    <Icon
                        name="Trash"
                        color={COLORS.GREY_MEDIUM}
                        hoverTextColor="text-grey-dark"
                    />
                </div>
            </div>
        </div>
    );
};

export default EmployeeListingItem;
