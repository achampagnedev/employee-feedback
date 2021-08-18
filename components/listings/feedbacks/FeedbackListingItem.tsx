import React, { useState } from 'react';
import CardUI from '../../ui/CardUI';
import Icon from '../../icons/Icon';
import FeedbackDetail from './item/FeedbackDetail';
import FeedbackEvaluators from './item/FeedbackEvaluators';
import { COLORS, IS_MANAGER } from '../../../constants';

const FeedbackListingItem = () => {
    const [editable, setEdit] = useState(false);

    const editFeedback = () => {
        setEdit(true);
    };

    const saveFeedback = () => {
        setEdit(false);
    };

    return (
        <CardUI>
            <div className="w-full p-6 mb-4">
                <div className="flex justify-between">
                    <div className="flex items-end mb-6">
                        <h2 className="inline-block pr-4 text-2xl leading-none">
                            Alexandre Champagne
                            <span className="text-sm text-grey-medium">
                                {' '}
                                - position
                            </span>
                        </h2>
                    </div>
                    <div
                        className="w-5 h-5 cursor-pointer"
                        onClick={!editable ? editFeedback : saveFeedback}
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
                                name="Close"
                                color={COLORS.GREY_MEDIUM}
                                hoverTextColor="text-grey-dark"
                            />
                        )}
                    </div>
                </div>
                <div
                    className={`grid gap-4 pr-4 ${
                        IS_MANAGER ? 'grid-cols-3 ' : ''
                    }`}
                >
                    <FeedbackDetail feedbackData={{}} editable={editable} />
                    {IS_MANAGER && (
                        <FeedbackEvaluators
                            evaluatorsData={{}}
                            editable={editable}
                        />
                    )}
                </div>
            </div>
        </CardUI>
    );
};

export default FeedbackListingItem;
