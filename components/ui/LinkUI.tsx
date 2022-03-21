import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Icon from '../icons/Icon';
import { COLORS } from '../../constants';

interface Props {
    href: string;
    text?: string;
    icon?: string;
    iconColor?: string;
    iconHoverColor?: string;
    styles?: string;
    hoverStyles?: string;
    activeStyles?: string;
    title?: string;
}

const LinkUI: React.FC<Props> = ({
    href,
    text = '',
    icon = '',
    iconColor = COLORS.GREY_MEDIUM,
    iconHoverColor = 'text-grey-dark',
    styles = '',
    hoverStyles = '',
    activeStyles = '',
    title = '',
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
