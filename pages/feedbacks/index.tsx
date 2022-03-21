import React, { useState } from 'react';
import ButtonUI from '../../components/ui/ButtonUI';
import FeedbackCreateForm from '../../components/forms/FeedbackCreateForm';
import FeedbackListing from '../../components/listings/feedbacks/FeedbackListing';
import prisma from '../../lib/prisma';
import { getSession } from 'next-auth/client';
import { GetServerSidePropsContext } from 'next';
import { isAdminEmail } from '../../utils';
import { Employee, Feedback } from '../../types';
import { ProvideFeedbacks } from '../../context/FeedbacksContext';
import PageUI from '../../components/ui/PageUI';

interface Props {
    isAdmin: boolean;
    employees: Employee[];
    initialFeedbacks: Feedback[];
}

const Index: React.FC<Props> = ({ isAdmin, employees, initialFeedbacks }) => {
    const [showCreateForm, setShowCreateForm] = useState(false);

    const hideCreateFeedbackForm = () => {
        setShowCreateForm(false);
    };

    return (
        <ProvideFeedbacks>
            <PageUI title="Feedbacks">
                {isAdmin && (
                    <>
                        <div className="flex justify-end mb-4 mt-[-56px]">
                            <div>
                                <ButtonUI
                                    onClickFn={() => setShowCreateForm(true)}
                                >
                                    + Create Feedback
                                </ButtonUI>
                            </div>
                        </div>
                        {showCreateForm && (
                            <FeedbackCreateForm
                                creatable={hideCreateFeedbackForm}
                                employees={employees}
                            />
                        )}
                    </>
                )}
                <FeedbackListing
                    isAdmin={isAdmin}
                    initialFeedbacks={initialFeedbacks}
                />
            </PageUI>
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

    // get the all the feedbacks for the admin or only the feedbacks assigned to the current employee.
    // also make sure the employee has been created  to avoid error.
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
