import React, { useEffect } from 'react';
import FeedbackListingItem from './FeedbackListingItem';
import { Feedback } from '../../../types';
import { useFeedbacks } from '../../../context/FeedbacksContext';

const FeedbackListing = ({
    isAdmin,
    initialFeedbacks,
}: {
    isAdmin: boolean;
    initialFeedbacks: Feedback[];
}) => {
    const { feedbacks, setFeedbacks } = useFeedbacks();

    useEffect(() => {
        setFeedbacks(initialFeedbacks);
    }, [initialFeedbacks, setFeedbacks]);

    return (
        <div className="pb-24">
            {feedbacks.length > 0 ? (
                <div className="grid grid-cols-2 gap-4">
                    {feedbacks.map((feedback) => (
                        <FeedbackListingItem
                            isAdmin={isAdmin}
                            feedback={feedback}
                            key={feedback.id}
                        />
                    ))}
                </div>
            ) : (
                <p className="flex justify-center text-2xl text-grey-medium pt-8">
                    {isAdmin
                        ? 'There are no feedbacks created yet. Click "Add Feedback" to create your first feedback.'
                        : "You Haven't been assigned to any feedbacks yet."}
                </p>
            )}
        </div>
    );
};

export default FeedbackListing;
