import React, { useEffect, useState } from 'react';
import { Feedback } from '../../../../types';

interface Props {
    feedback: Feedback;
}

const FeedbackEvaluator: React.FC<Props> = ({ feedback }) => {
    const [name, setName] = useState(null);
    const [position, setPosition] = useState(null);

    useEffect(() => {
        fetch(`/api/employees/${feedback.evaluatorEmployeeId}`)
            .then(async (response) => {
                const result = await response.json().then((result) => result);
                if (result.error) return alert(result.error);
                setName(result.name);
                setPosition(result.position);
            })
            .catch((e) => console.error(e));
    }, [feedback.evaluatorEmployeeId]);

    return (
        <div>
            <h3 className="mt-1 mb-3 text-lg text-primary">Evaluator</h3>
            <p>
                {name}
                <span className="text-grey-medium text-sm"> - {position}</span>
            </p>
        </div>
    );
};

export default FeedbackEvaluator;
