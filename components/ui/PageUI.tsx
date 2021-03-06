import React, { ReactElement } from 'react';
import Head from 'next/head';
import Nav from '../nav/Nav';
import NavBreadcrumbs from '../nav/NavBreadcrumbs';

interface Props {
    title: string;
    children: JSX.Element | JSX.Element[];
}

const PageUI: React.FC<Props> = ({ title, children, ...props }) => {
    return (
        <div className="w-full bg-off-white">
            <Head>
                <title>{title} - Employee Feedback</title>
            </Head>
            <Nav />
            <div className="w-full flex justify-center min-h-screen px-4 pt-20 pb-10">
                <main className="w-full max-w-6xl">
                    <div className="min-h-full">
                        <NavBreadcrumbs title={title} />
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default PageUI;
