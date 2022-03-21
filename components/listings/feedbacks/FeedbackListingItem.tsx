import React from 'react';
import CardUI from '../../ui/CardUI';
import FeedbackDetail from './item/FeedbackDetail';
import FeedbackEvaluator from './item/FeedbackEvaluator';
import { Feedback } from '../../../types';

interface Props {
    isAdmin: boolean;
    feedback: Feedback;
}

const FeedbackListingItem: React.FC<Props> = ({ isAdmin, feedback }) => {
    return (
        <CardUI>
            <div className="w-full p-6">
                <div className="flex justify-between">
                    <div className="flex items-end mb-4">
                        <h2 className="inline-block pr-4 text-2xl leading-none">
                            {feedback.employee}
                            <span className="text-sm text-grey-medium">
                                {' '}
                                - {feedback.position}
                            </span>
                        </h2>
                    </div>
                </div>
                <div>
                    <FeedbackDetail feedback={feedback} isAdmin={isAdmin} />
                    {isAdmin && <FeedbackEvaluator feedback={feedback} />}
                </div>
            </div>
        </CardUI>
    );
};

export default FeedbackListingItem;
