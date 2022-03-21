import React from 'react';
import LinkUI from '../ui/LinkUI';
import { COLORS, ROUTES } from '../../constants';
import { useRouter } from 'next/router';

const NavMain = () => {
    const router = useRouter();
    const currRoute = router.pathname;

    return (
        <ul className="flex justify-center items-center px-8">
            <li className="mr-6 flex">
                <LinkUI
                    href={ROUTES.FEEDBACKS}
                    iconColor={
                        currRoute === ROUTES.FEEDBACKS
                            ? COLORS.GREY_NIGHT
                            : COLORS.GREY_MEDIUM
                    }
                    icon="Feedbacks"
                    styles="block w-8 w-full flex"
                    title="Feedbacks"
                />
            </li>
            <li>
                <LinkUI
                    href={ROUTES.EMPLOYEES}
                    iconColor={
                        currRoute === ROUTES.EMPLOYEES
                            ? COLORS.GREY_NIGHT
                            : COLORS.GREY_MEDIUM
                    }
                    icon="Employees"
                    styles="block w-8 w-full"
                    title="Employees"
                />
            </li>
        </ul>
    );
};

export default NavMain;
