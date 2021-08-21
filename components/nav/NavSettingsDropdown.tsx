import React from 'react';
import { signOut, useSession } from 'next-auth/client';
import AdminIcon from '../icons/AdminIcon';
import Image from 'next/image';

const NavSettingsDropdown = () => {
    const [session] = useSession();

    return (
        <div className="group absolute right-4 md:right-auto md:bottom-4 cursor-pointer text-grey-night">
            <div className="user-settings w-10 h-10">
                {session && session.user.image !== '' && (
                    <Image
                        src={session.user.image}
                        alt={session.user.name}
                        className="rounded-full"
                        width={40}
                        height={40}
                    />
                )}
                {(!session || session.user.image === '') && <AdminIcon />}
            </div>
            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-[20px] left-[20px] bg-white drop-shadow-md">
                {session && session.user.email !== '' && (
                    <p className="px-8 py-2 font-bold">{session.user.email}</p>
                )}
                <ul className="divide-y text-sm">
                    <li
                        className="px-8 py-2 transition-colors duration-200 hover:bg-grey-dark hover:text-off-white"
                        onClick={() => signOut({ callbackUrl: '/' })}
                    >
                        Logout
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavSettingsDropdown;
