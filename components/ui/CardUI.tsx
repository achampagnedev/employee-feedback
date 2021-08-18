import React from 'react';

const CardUI = ({
    children,
}: {
    children: React.ClassicElement<any> | React.FC;
}) => {
    return <div className="drop-shadow-md bg-white">{children}</div>;
};

export default CardUI;
