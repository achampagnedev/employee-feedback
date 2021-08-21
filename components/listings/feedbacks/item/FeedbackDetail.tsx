import React, { useState } from 'react';
import Icon from '../../../icons/Icon';
import { COLORS } from '../../../../constants';
import { Feedback } from '../../../../types';

const FeedbackDetail = ({
    feedback,
    isAdmin,
}: {
    feedback: Feedback;
    isAdmin: boolean;
}) => {
    const [newFeedback, setNewFeedback] = useState(feedback.content);
    const [editable, setEdit] = useState(false);

    const editFeedback = () => {
        setEdit(true);
    };

    const updateFeedback = async () => {
        await fetch(`/api/feedbacks/${feedback.id}`, {
            method: 'PUT',
            body: JSON.stringify({ newFeedback }),
        })
            .then(async (response: Response) => {
                const result = await response.json().then((result) => result);
                if (result.error) return alert(result.error);
                setEdit(false);
            })
            .catch((e) => console.error(e));
    };

    return (
        <div className="pr-4 pb-6 col-span-2">
            <div className="mt-1 mb-3 flex items-center">
                <h3 className="text-lg text-grey-medium">
                    {isAdmin ? 'Feedback' : 'Your Feedback'}
                </h3>
                <div
                    className="w-5 h-5 ml-3 cursor-pointer"
                    onClick={!editable ? editFeedback : updateFeedback}
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
            </div>
            {!editable && (
                <div>
                    <figure>
                        <blockquote>
                            {newFeedback !== '' ? (
                                newFeedback
                            ) : isAdmin ? (
                                <span className="italic text-grey-light">
                                    The employee hasn&apos;t entered their
                                    feedback yet.
                                </span>
                            ) : (
                                <span className="italic text-grey-light">
                                    Please add your feedback by clicking the
                                    &quot;Edit&quot; icon.
                                </span>
                            )}
                        </blockquote>
                    </figure>
                </div>
            )}
            {editable && (
                <div>
                    <div className="flex items-center mb-6">
                        <textarea
                            id="employee_feedback_edit"
                            name="employee_feedback_edit"
                            placeholder="Write your feedback here..."
                            value={newFeedback}
                            className="text-grey-night text-sm flex-grow rounded-[3px] p-2 border disabled:opacity-50 disabled:bg-off-white"
                            onChange={(e) => setNewFeedback(e.target.value)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default FeedbackDetail;
