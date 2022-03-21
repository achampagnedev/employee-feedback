import React from 'react';
import Link from 'next/link';

const baseStyles =
    'inline-block text-white bg-primary hover:bg-primary-light transition-colors duration-200 py-2 px-4 inline-block text-white bg-primary hover:bg-primary-light transition-colors duration-200 py-2 px-4';

interface Props {
    onClickFn?: Function;
    href?: string;
    children: JSX.Element | string;
}

const ButtonUI: React.FC<Props> = ({
    onClickFn = undefined,
    href = '',
    children,
}) => {
    return (
        <>
            {href !== '' && (
                <Link href={href}>
                    <a className={baseStyles}>{children}</a>
                </Link>
            )}
            {(onClickFn !== undefined || href === '') && (
                <button
                    className={`${baseStyles} w-full`}
                    onClick={() => {
                        if (onClickFn) onClickFn();
                    }}
                    type="submit"
                >
                    {children}
                </button>
            )}
        </>
    );
};

export default ButtonUI;
