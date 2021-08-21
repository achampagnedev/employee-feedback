import React, { useContext, useState } from 'react';

const FeedbacksContext = React.createContext(null);

export function ProvideFeedbacks({ children }) {
    const feedbacksValue = useProvideFeedbacks();
    return (
        <FeedbacksContext.Provider value={feedbacksValue}>
            {children}
        </FeedbacksContext.Provider>
    );
}

export function useFeedbacks() {
    return useContext(FeedbacksContext);
}

function useProvideFeedbacks() {
    const [feedbacks, setFeedbacks] = useState([]);

    return { feedbacks, setFeedbacks };
}
