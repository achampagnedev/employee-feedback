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
                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
            />
        </svg>
    );
};

export default CloseIcon;
