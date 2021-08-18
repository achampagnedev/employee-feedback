import React from 'react';
import CardUI from '../ui/CardUI';
import Icon from '../icons/Icon';
import InputUI from '../ui/InputUI';
import SelectUI from '../ui/SelectUI';
import ButtonUI from '../ui/ButtonUI';
import TextareaUI from '../ui/TextareaUI';
import FormUI from '../ui/FormUI';

const FeedbackCreateForm = ({ creatable }: { creatable: Function }) => {
    const createNewFeedback = () => {
        console.log('new employee created');
    };

    return (
        <CardUI>
            <div className="mb-4">
                <FormUI
                    headerText="Add New Feedback"
                    closableOnClick={creatable}
                >
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <SelectUI
                                id="employee_name_new"
                                name="employee_name_new"
                                labelText="Employee*"
                                options={[
                                    {
                                        value: '1',
                                        label: 'Alexandre Champagne',
                                    },
                                    { value: '2', label: 'John Smith' },
                                    { value: '3', label: 'Robert Thompson' },
                                ]}
                            />
                            <TextareaUI
                                id="employee_feedback_new"
                                name="employee_feedback_new"
                                labelText="Feedback"
                            />
                        </div>
                        <div>
                            <SelectUI
                                id="employee_evaluators"
                                name="employee_evaluators"
                                labelText="Evaluators*"
                                isMulti={true}
                                options={[
                                    {
                                        value: '1',
                                        label: 'Alexandre Champagne',
                                    },
                                    { value: '2', label: 'John Smith' },
                                    { value: '3', label: 'Robert Thompson' },
                                ]}
                            />
                            <div className="flex justify-end mt-6">
                                <div>
                                    <ButtonUI
                                        text="Create New Feedback"
                                        onClickFn={() => createNewFeedback}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </FormUI>
            </div>
        </CardUI>
    );
};

export default FeedbackCreateForm;
