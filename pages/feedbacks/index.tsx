import React, { useState } from 'react';
import Head from 'next/head';
import Nav from '../../components/nav/Nav';
import NavBreadcrumbs from '../../components/nav/NavBreadcrumbs';
import ButtonUI from '../../components/ui/ButtonUI';
import FeedbackCreateForm from '../../components/forms/FeedbackCreateForm';
import FeedbackListing from '../../components/listings/feedbacks/FeedbackListing';
import prisma from '../../lib/prisma';
import { getSession } from 'next-auth/client';
import { GetServerSidePropsContext } from 'next';
import { isAdminEmail } from '../../utils';
import { Employee, Feedback } from '../../types';
import { User } from 'next-auth';
import { ProvideFeedbacks } from '../../context/FeedbacksContext';

const Index = ({
    currentUser,
    isAdmin,
    employees,
    initialFeedbacks,
}: {
    currentUser: User;
    isAdmin: boolean;
    employees: Employee[];
    initialFeedbacks: Feedback[];
}) => {
    const [showCreateForm, setShowCreateForm] = useState(false);

    const hideCreateFeedbackForm = () => {
        setShowCreateForm(false);
    };

    return (
        <ProvideFeedbacks>
            <div className="w-full bg-off-white">
                <Head>
                    <title>Feedbacks - PayPay Employee Feedback</title>
                </Head>
                <Nav />
                <div className="w-full max-w-7xl min-h-screen pt-24 pl-4 md:pt-4 md:pl-24 pb-10">
                    <main className="w-full max-w-7xl">
                        <div className="min-h-full">
                            <NavBreadcrumbs title="Feedbacks" />
                            {isAdmin && (
                                <>
                                    <div className="flex justify-end">
                                        <div>
                                            <ButtonUI
                                                text="+ Add Feedback"
                                                onClickFn={() =>
                                                    setShowCreateForm(true)
                                                }
                                            />
                                        </div>
                                    </div>
                                    {showCreateForm && (
                                        <FeedbackCreateForm
                                            creatable={hideCreateFeedbackForm}
                                            employees={employees}
                                            currentUser={currentUser}
                                        />
                                    )}
                                </>
                            )}
                            <FeedbackListing
                                isAdmin={isAdmin}
                                initialFeedbacks={initialFeedbacks}
                            />
                        </div>
                    </main>
                </div>
            </div>
        </ProvideFeedbacks>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    const employee = await prisma.employee.findUnique({
        where: { email: session.user.email },
    });

    const isAdmin = isAdminEmail(session.user.email);

    const employees = await prisma.employee.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            position: true,
            role: true,
        },
    });

    const feedbacks = await prisma.feedback.findMany({
        where:
            isAdmin || employee === null
                ? {}
                : { evaluatorEmployeeId: employee.id },
        orderBy: [
            {
                employee: 'asc',
            },
        ],
        select: {
            id: true,
            employee: true,
            position: true,
            content: true,
            evaluatorEmployeeId: true,
        },
    });

    return {
        props: {
            currentUser: session.user,
            isAdmin: isAdmin,
            employees: employees,
            initialFeedbacks: feedbacks,
        },
    };
}

export default Index;
