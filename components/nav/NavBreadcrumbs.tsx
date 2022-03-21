import React from 'react';
import Icon from '../icons/Icon';
import { COLORS } from '../../constants';

interface Props {
    title: string;
}

const NavBreadcrumbs: React.FC<Props> = ({ title }) => {
    return (
        <div className="flex pt-2 pb-6">
            <div className="w-6 h-6 mr-2">
                <Icon name={title} color={COLORS.GREY_DARK} />
            </div>
            <p className="text-grey-dark">{title}</p>
        </div>
    );
};

export default NavBreadcrumbs;
