import React from 'react';

interface Props {
    children: JSX.Element;
}

const CardUI: React.FC<Props> = ({ children }) => {
    return <div className="drop-shadow-md bg-white">{children}</div>;
};

export default CardUI;
