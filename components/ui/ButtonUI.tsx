import React from 'react';
import Link from 'next/link';

const ButtonUI = ({
    onClickFn = undefined,
    href = '',
    text,
}: {
    onClickFn?: Function;
    href?: string;
    text: string;
}) => {
    return (
        <>
            {href !== '' && (
                <Link href={href}>
                    <a className="inline-block text-white bg-primary hover:bg-primary-light transition-colors duration-200 py-2 px-4 mb-4">
                        {text}
                    </a>
                </Link>
            )}
            {(onClickFn !== undefined || href === '') && (
                <button
                    className="inline-block text-white bg-primary hover:bg-primary-light transition-colors duration-200 py-2 px-4 mb-4 w-full"
                    onClick={(e) => {
                        if (onClickFn) onClickFn();
                    }}
                    type="submit"
                >
                    {text}
                </button>
            )}
        </>
    );
};

export default ButtonUI;
