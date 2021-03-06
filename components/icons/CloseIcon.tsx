import React from 'react';
import { COLORS } from '../../constants';

interface Props {
    color?: string;
    hoverTextColor?: string;
}

const CloseIcon: React.FC<Props> = ({
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
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    );
};

export default CloseIcon;
