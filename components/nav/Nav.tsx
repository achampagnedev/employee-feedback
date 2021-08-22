import React from 'react';
import NavMain from './NavMain';
import NavSettingsDropdown from './NavSettingsDropdown';
import Image from 'next/image';

const Nav = () => {
    return (
        <header className="flex items-center justify-center px-4 fixed h-16 w-full left-0 top-0 bg-white drop-shadow-md z-10">
            <div className="flex w-full max-w-6xl relative">
                <div className="w-8 flex items-center">
                    <Image
                        src="/paypay-sm.webp"
                        alt="PayPay Logo Small"
                        width={40}
                        height={40}
                    />
                </div>
                <NavMain />
                <NavSettingsDropdown />
            </div>
        </header>
    );
};

export default Nav;
