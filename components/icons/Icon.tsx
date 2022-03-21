import React from 'react';
import { COLORS } from '../../constants';
import CloseIcon from './CloseIcon';
import EditIcon from './EditIcon';
import AdminIcon from './AdminIcon';
import TrashIcon from './TrashIcon';
import EmployeesIcon from './EmployeesIcon';
import FeedbackAddIcon from './FeedbackAddIcon';
import FeedbackIcon from './FeedbackIcon';
import SaveIcon from './SaveIcon';

interface Props {
    name: string;
    color?: string;
    hoverTextColor?: string;
}

const Icon: React.FC<Props> = ({
    name,
    color = COLORS.GREY_MEDIUM,
    hoverTextColor = 'text-grey-dark',
}) => {
    return (
        <>
            {name === 'Feedbacks' && (
                <FeedbackIcon color={color} hoverTextColor={hoverTextColor} />
            )}
            {name === 'Close' && (
                <CloseIcon color={color} hoverTextColor={hoverTextColor} />
            )}
            {name === 'Edit' && (
                <EditIcon color={color} hoverTextColor={hoverTextColor} />
            )}
            {name === 'Save' && (
                <SaveIcon color={color} hoverTextColor={hoverTextColor} />
            )}
            {name === 'Administration' && (
                <AdminIcon color={color} hoverTextColor={hoverTextColor} />
            )}
            {name === 'Trash' && (
                <TrashIcon color={color} hoverTextColor={hoverTextColor} />
            )}
            {name === 'Employees' && (
                <EmployeesIcon color={color} hoverTextColor={hoverTextColor} />
            )}
            {name === 'FeedbackAdd' && (
                <FeedbackAddIcon
                    color={color}
                    hoverTextColor={hoverTextColor}
                />
            )}
        </>
    );
};

export default Icon;
