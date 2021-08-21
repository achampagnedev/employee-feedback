import React, { useEffect } from 'react';
import FeedbackListingItem from './FeedbackListingItem';
import { Feedback } from '../../../types';
import { useFeedbacks } from '../../../context/FeedbacksContext';
import LoaderUI from '../../ui/LoaderUI';
import { useSession } from 'next-auth/client';

const FeedbackListing = ({
    isAdmin,
    initialFeedbacks,
}: {
    isAdmin: boolean;
    initialFeedbacks: Feedback[];
}) => {
    const [session, loading] = useSession();
    const { feedbacks, setFeedbacks } = useFeedbacks();

    useEffect(() => {
        setFeedbacks(initialFeedbacks);
    }, [initialFeedbacks, setFeedbacks]);

    return (
        <div className="pb-24">
            {loading && (
                <div className="p-4">
                    <LoaderUI />
                </div>
            )}
            {feedbacks.length > 0 && !loading && (
                <div className="grid grid-cols-2 gap-4">
                    {feedbacks.map((feedback) => (
                        <FeedbackListingItem
                            isAdmin={isAdmin}
                            feedback={feedback}
                            key={feedback.id}
                        />
                    ))}
                </div>
            )}
            {feedbacks.length === 0 && !loading && (
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
