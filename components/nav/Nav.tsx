import React from 'react';
import NavMain from './NavMain';
import NavSettingsDropdown from './NavSettingsDropdown';

const Nav: React.FC = () => {
    return (
        <header className="flex items-center justify-center px-4 fixed h-16 w-full left-0 top-0 bg-white drop-shadow-md z-10">
            <div className="flex w-full max-w-6xl relative">
                <div className="w-8 flex items-center">
                    <span className="text-bold text-xl">EF</span>
                </div>
                <NavMain />
                <NavSettingsDropdown />
            </div>
        </header>
    );
};

export default Nav;
