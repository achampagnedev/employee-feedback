import React, { useState } from 'react';
import CardUI from '../ui/CardUI';
import FormUI from '../ui/FormUI';
import ButtonUI from '../ui/ButtonUI';
import Select from 'react-select';
import { useEmployees } from '../../context/EmployeesContext';
import { USER_ROLE_OPTIONS } from '../../constants';

const EmployeeAddForm = ({ creatable }: { creatable: Function }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');
    const [role, setRole] = useState({});
    const { employees, setEmployees } = useEmployees();

    const addEmployee = async () => {
        await fetch('/api/employees', {
            method: 'POST',
            body: JSON.stringify({ name, email, position, role }),
        })
            .then(async (response: Response) => {
                const result = await response.json().then((result) => result);
                if (result.error) return alert(result.error);
                setEmployees([...employees, result]);
                setName('');
                setEmail('');
                setPosition('');
                setRole({});
            })
            .catch((e) => console.error(e));
    };

    return (
        <CardUI>
            <FormUI headerText="Add Employee" closableOnClick={creatable}>
                <form
                    className="grid grid-cols-2 gap-8"
                    onSubmit={(e) => {
                        e.preventDefault();
                        addEmployee().then((r) => r);
                    }}
                >
                    <div>
                        <div className="flex items-center mb-6">
                            <label
                                htmlFor="employee_name"
                                className="text-sm min-w-[100px] pr-4"
                            >
                                Name*
                            </label>
                            <input
                                required
                                id="employee_name"
                                type="text"
                                value={name}
                                placeholder="Employee name"
                                className="text-grey-night text-sm flex-grow rounded-[3px] p-2 border disabled:opacity-50 disabled:bg-off-white"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center mb-6">
                            <label
                                htmlFor="employee_email"
                                className="text-sm min-w-[100px] pr-4"
                            >
                                Email*
                            </label>
                            <input
                                required
                                id="employee_email"
                                type="email"
                                value={email}
                                placeholder="Employee email"
                                className="text-grey-night text-sm flex-grow rounded-[3px] p-2 border disabled:opacity-50 disabled:bg-off-white"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center mb-6">
                            <label
                                htmlFor="employee_position"
                                className="text-sm min-w-[100px] pr-4"
                            >
                                Position*
                            </label>
                            <input
                                required
                                id="employee_position"
                                type="text"
                                value={position}
                                placeholder="Employee position"
                                className="text-grey-night text-sm flex-grow rounded-[3px] p-2 border disabled:opacity-50 disabled:bg-off-white"
                                onChange={(e) => setPosition(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center mb-6">
                            <label
                                htmlFor="employee_role"
                                className="text-sm min-w-[100px] pr-4"
                            >
                                Role*
                            </label>
                            <Select
                                required
                                id="employee_role"
                                placeholder="Select Employee Role"
                                menuPortalTarget={document.querySelector(
                                    'body'
                                )}
                                options={USER_ROLE_OPTIONS}
                                onChange={(e) => setRole(e)}
                                className="text-sm flex-grow rounded-sm disabled:opacity-50 disabled:bg-off-white min-w-[200px] w-full"
                            />
                        </div>
                        <div className="flex justify-end">
                            <div>
                                <ButtonUI text="Create New Employee" />
                            </div>
                        </div>
                    </div>
                </form>
            </FormUI>
        </CardUI>
    );
};

export default EmployeeAddForm;
