import React from 'react';
import { COLORS } from '../../constants';

interface Props {
    color?: string;
    hoverTextColor?: string;
}

const EditIcon: React.FC<Props> = ({
    color = COLORS.OFF_WHITE,
    hoverTextColor = '',
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-full hover:stroke-current ${
                hoverTextColor !== '' ? hoverTextColor : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke={color}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
        </svg>
    );
};

export default EditIcon;
