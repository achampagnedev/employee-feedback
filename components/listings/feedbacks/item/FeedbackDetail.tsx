import React from 'react';
import TextareaUI from '../../../ui/TextareaUI';
import { IS_MANAGER } from '../../../../constants';

const FeedbackDetail = ({
    feedbackData = undefined,
    editable,
}: {
    feedbackData: object;
    editable: boolean;
}) => {
    return (
        <div className="pr-4 col-span-2">
            {!editable && (
                <div>
                    <h3 className="mt-1 mb-4 text-grey-medium">Feedbacks</h3>
                    <figure>
                        <blockquote>
                            This guy is the best colleague hands down! I would
                            work with him again for sure. His code is readable
                            and simple and he is just a great guy.
                        </blockquote>
                        <figcaption className="font-bold">
                            —John Smith, <cite>Manager</cite>
                        </figcaption>
                    </figure>
                </div>
            )}
            {editable && (
                <div>
                    <h3 className="mt-1 mb-4 text-grey-medium">
                        Your Feedback
                    </h3>
                    <TextareaUI
                        id="employee_feedback_edit"
                        name="employee_feedback_edit"
                    />
                </div>
            )}
        </div>
    );
};

export default FeedbackDetail;
