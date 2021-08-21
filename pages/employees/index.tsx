import React, { useState } from 'react';
import EmployeeAddForm from '../../components/forms/EmployeeAddForm';
import EmployeeListing from '../../components/listings/employees/EmployeeListing';
import Head from 'next/head';
import Nav from '../../components/nav/Nav';
import NavBreadcrumbs from '../../components/nav/NavBreadcrumbs';
import ButtonUI from '../../components/ui/ButtonUI';
import prisma from '../../lib/prisma';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/client';
import { isAdminEmail } from '../../utils';
import { ProvideEmployees } from '../../context/EmployeesContext';

const Index = ({ initialEmployees, isAdmin, currentUser }) => {
    const [showCreateForm, setShowCreateForm] = useState(false);

    const hideCreateFeedbackForm = () => {
        setShowCreateForm(false);
    };

    return (
        <ProvideEmployees>
            <div className="w-full bg-off-white">
                <Head>
                    <title>Employees - PayPay Employee Feedback</title>
                </Head>
                <Nav />
                <div className="w-full max-w-7xl min-h-screen pt-24 pl-4 md:pt-4 md:pl-24 pb-10">
                    <main className="w-full">
                        <div className="min-h-full">
                            <NavBreadcrumbs title="Employees" />
                            {isAdmin && (
                                <>
                                    <div className="flex justify-end">
                                        <div>
                                            <ButtonUI
                                                text="+ Add Employee"
                                                onClickFn={() =>
                                                    setShowCreateForm(true)
                                                }
                                            />
                                        </div>
                                    </div>
                                    {showCreateForm && (
                                        <div className="pb-8">
                                            <EmployeeAddForm
                                                creatable={
                                                    hideCreateFeedbackForm
                                                }
                                            />
                                        </div>
                                    )}
                                </>
                            )}
                            <div>
                                <EmployeeListing
                                    initialEmployees={initialEmployees}
                                    isAdmin={isAdmin}
                                    currentUser={currentUser}
                                />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </ProvideEmployees>
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

    const isAdmin = isAdminEmail(session.user.email);

    const employees = await prisma.employee.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            position: true,
            role: true,
            roleLabel: true,
        },
        orderBy: [
            {
                createdAt: 'asc',
            },
        ],
    });

    return {
        props: {
            currentUser: session.user,
            isAdmin: isAdmin,
            initialEmployees: employees,
        },
    };
}

export default Index;
