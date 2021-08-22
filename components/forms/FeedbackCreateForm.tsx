import React, { useState } from 'react';
import CardUI from '../ui/CardUI';
import ButtonUI from '../ui/ButtonUI';
import FormUI from '../ui/FormUI';
import Select from 'react-select';
import { Employee } from '../../types';
import { User } from 'next-auth';
import { useFeedbacks } from '../../context/FeedbacksContext';
import LoaderUI from '../ui/LoaderUI';

const FeedbackCreateForm = ({
    creatable,
    employees,
}: {
    creatable: Function;
    employees: Employee[];
    currentUser: User;
}) => {
    const [loading, setLoading] = useState(false);
    const [filteredEmployees, setFilteredEmployees] = useState(employees);
    const [newEmployee, setNewEmployee] = useState(null);
    const [newFeedback, setFeedback] = useState('');
    const [newEvaluator, setNewEvaluator] = useState(null);
    const { feedbacks, setFeedbacks } = useFeedbacks();

    const createFeedback = async () => {
        setLoading(true);

        await fetch('/api/feedbacks', {
            method: 'POST',
            body: JSON.stringify({ newEmployee, newFeedback, newEvaluator }),
        })
            .then(async (response: Response) => {
                const result = await response.json().then((result) => result);
                setLoading(false);
                if (result.error) return alert(result.error);
                setFeedbacks([result, ...feedbacks]);
                setNewEmployee(null);
                setNewEvaluator(null);
            })
            .catch((e) => {
                console.error(e);
            });
    };

    return (
        <CardUI>
            <div className="mb-4 z-10">
                <FormUI
                    headerText="Create New Feedback"
                    closableOnClick={creatable}
                >
                    <form
                        className="grid md:grid-cols-2 md:gap-8"
                        onSubmit={(e) => {
                            e.preventDefault();
                            createFeedback().then((r) => r);
                        }}
                    >
                        <div>
                            <div className="flex flex-col md:flex-row md:items-center mb-6">
                                <label
                                    htmlFor="employee_name"
                                    className="text-sm min-w-[100px] pb-2 md:pb-0 md:pr-4"
                                >
                                    Employee*
                                </label>
                                <Select
                                    id="employee_name"
                                    options={employees.map((employee) => {
                                        return {
                                            value: employee.id,
                                            label: employee.name,
                                        };
                                    })}
                                    menuPortalTarget={document.querySelector(
                                        'body'
                                    )}
                                    required
                                    className="text-sm flex-grow rounded-sm disabled:opacity-50 disabled:bg-off-white min-w-[200px] w-full"
                                    placeholder="Select Employee"
                                    value={newEmployee}
                                    onChange={(e) => {
                                        setFilteredEmployees(
                                            employees.filter(
                                                (employee) =>
                                                    employee.id !== e.value
                                            )
                                        );
                                        setNewEmployee(e);
                                    }}
                                />
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center mb-6">
                                <label
                                    htmlFor="employee_feedback_new"
                                    className="text-sm  min-w-[100px] pb-2 md:pb-0 md:pr-4"
                                >
                                    Feedback
                                </label>
                                <textarea
                                    id="employee_feedback_new"
                                    name="employee_feedback_new"
                                    placeholder="Add your feedback instructions or leave this for the employee to fill."
                                    className="w-full md:w-auto text-grey-night text-sm flex-grow rounded-[3px] p-2 border disabled:opacity-50 disabled:bg-off-white"
                                    onChange={(e) =>
                                        setFeedback(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col md:flex-row md:items-center mb-6">
                                <label
                                    htmlFor="employee_role"
                                    className="text-sm min-w-[100px] pb-2 md:pb-0 md:pr-4"
                                >
                                    Evaluator*
                                </label>
                                <Select
                                    id="employee_evaluator"
                                    options={filteredEmployees.map(
                                        (employee) => {
                                            return {
                                                value: employee.id,
                                                label: employee.name,
                                            };
                                        }
                                    )}
                                    required
                                    menuPortalTarget={document.querySelector(
                                        'body'
                                    )}
                                    className="text-sm flex-grow rounded-sm disabled:opacity-50 disabled:bg-off-white min-w-[200px] w-full"
                                    placeholder="Select Evaluator"
                                    value={newEvaluator}
                                    onChange={(e) => {
                                        setNewEvaluator(e);
                                    }}
                                />
                            </div>
                            <div className="flex justify-end items-center pt-4 md:pt-0 mb-4">
                                {loading && (
                                    <LoaderUI
                                        centered={false}
                                        width="8"
                                        height="8"
                                    />
                                )}
                                <div className="md:pl-2 w-full md:w-auto">
                                    <ButtonUI text="Create New Feedback" />
                                </div>
                            </div>
                        </div>
                    </form>
                </FormUI>
            </div>
        </CardUI>
    );
};

export default FeedbackCreateForm;
