import React from 'react';
import NavMain from './NavMain';
import NavSettingsDropdown from './NavSettingsDropdown';
import Image from 'next/image';

const Nav = () => {
    return (
        <header className="flex flex-row md:flex-col items-center fixed md:min-h-screen min-h-0 md:w-16 md:left-0 left-auto md:top-0 w-full h-16 md:h-full px-4 md:py-4 py-0 md:px-0 bg-white drop-shadow-md z-10">
            <div className="w-8">
                <Image
                    src="/paypay-sm.webp"
                    alt="PayPay Logo Small"
                    width={40}
                    height={40}
                />
            </div>
            <NavMain />
            <NavSettingsDropdown />
        </header>
    );
};

export default Nav;
