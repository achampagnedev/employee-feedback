import React from 'react';
import LinkUI from '../ui/LinkUI';
import { COLORS, ROUTES } from '../../constants';

const NavMain = () => {
    return (
        <ul className="flex items-center justify-center md:flex-col flex-row px-4 md:py-4 md:px-0">
            <li>
                <LinkUI
                    href={ROUTES.FEEDBACKS}
                    icon="Feedbacks"
                    styles="block p-[18px] w-full"
                    iconColor={COLORS.GREY_MEDIUM}
                    iconHoverColor="text-grey-dark"
                    title="Feedbacks"
                />
            </li>
            <li>
                <LinkUI
                    href={ROUTES.EMPLOYEES}
                    icon="Employees"
                    styles="block p-[18px] w-full"
                    iconColor={COLORS.GREY_MEDIUM}
                    iconHoverColor="text-grey-dark"
                    title="Employees"
                />
            </li>
        </ul>
    );
};

export default NavMain;
