import React from 'react';
import SelectUI from '../../../ui/SelectUI';

const FeedbackEvaluators = ({
    evaluatorsData = undefined,
    editable,
}: {
    evaluatorsData: object;
    editable: boolean;
}) => {
    return (
        <div>
            <h3 className="mt-1 mb-4 text-grey-medium">Evaluators</h3>
            {!editable && (
                <ul className="text-sm list-disc pl-4">
                    <li>Alexandre Champagne</li>
                    <li>John Smith</li>
                    <li>Robert Thompson</li>
                </ul>
            )}
            {editable && (
                <div>
                    <SelectUI
                        id="employee_evaluators"
                        name="employee_evaluators"
                        isMulti={true}
                        options={[
                            { value: '1', label: 'Alexandre Champagne' },
                            { value: '2', label: 'John Smith' },
                            { value: '3', label: 'Robert Thompson' },
                        ]}
                    />
                </div>
            )}
        </div>
    );
};

export default FeedbackEvaluators;
