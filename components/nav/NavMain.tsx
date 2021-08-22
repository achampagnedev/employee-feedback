import React from 'react';
import LinkUI from '../ui/LinkUI';
import { COLORS, ROUTES } from '../../constants';

const NavMain = () => {
    return (
        <ul className="flex justify-center items-center px-8">
            <li className="mr-6 flex">
                <LinkUI
                    href={ROUTES.FEEDBACKS}
                    icon="Feedbacks"
                    styles="block w-8 w-full flex"
                    title="Feedbacks"
                />
            </li>
            <li>
                <LinkUI
                    href={ROUTES.EMPLOYEES}
                    icon="Employees"
                    styles="block w-8 w-full"
                    title="Employees"
                />
            </li>
        </ul>
    );
};

export default NavMain;
