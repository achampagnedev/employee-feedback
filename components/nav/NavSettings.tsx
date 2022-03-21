import React from 'react';
import LinkUI from '../ui/LinkUI';
import { ROUTES } from '../../constants';

const NavSettings: React.FC = () => {
    return (
        <ul className="flex pb-10 w-full">
            <li className="mr-12">
                <LinkUI
                    href={`${ROUTES.EMPLOYEES}`}
                    styles="text-2xl text-off-white transition-colors duration-200"
                    hoverStyles="hover:text-grey-medium"
                    activeStyles="text-primary"
                    text="Index"
                />
            </li>
        </ul>
    );
};

export default NavSettings;
