import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Icon from '../icons/Icon';

const LinkUI = ({
    href,
    text = '',
    icon = '',
    iconColor = '',
    iconHoverColor = '',
    styles = '',
    hoverStyles = '',
    activeStyles = '',
    title = '',
}: {
    href: string;
    text?: string;
    icon?: string;
    iconColor?: string;
    iconHoverColor?: string;
    styles?: string;
    hoverStyles?: string;
    activeStyles?: string;
    title?: string;
}) => {
    const router = useRouter();

    return (
        <Link href={href}>
            <a
                className={`${styles} ${
                    router.pathname === href ? activeStyles : hoverStyles
                }`}
                title={title}
            >
                {icon !== '' && (
                    <Icon
                        name={icon}
                        color={iconColor}
                        hoverTextColor={iconHoverColor}
                    />
                )}
                {text}
            </a>
        </Link>
    );
};

export default LinkUI;
