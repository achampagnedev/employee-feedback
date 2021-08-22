import React, { useState } from 'react';
import EmployeeCreateForm from '../../components/forms/EmployeeCreateForm';
import EmployeeListing from '../../components/listings/employees/EmployeeListing';
import ButtonUI from '../../components/ui/ButtonUI';
import prisma from '../../lib/prisma';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/client';
import { isAdminEmail } from '../../utils';
import { ProvideEmployees } from '../../context/EmployeesContext';
import PageUI from '../../components/ui/PageUI';

const Index = ({ initialEmployees, isAdmin, currentUser }) => {
    const [showCreateForm, setShowCreateForm] = useState(false);

    const hideCreateFeedbackForm = () => {
        setShowCreateForm(false);
    };

    return (
        <ProvideEmployees>
            <PageUI title="Employees">
                {isAdmin && (
                    <>
                        <div className="flex justify-end mb-4 mt-[-56px]">
                            <div>
                                <ButtonUI
                                    text="+ Create Employee"
                                    onClickFn={() => setShowCreateForm(true)}
                                />
                            </div>
                        </div>
                        {showCreateForm && (
                            <div className="pb-8">
                                <EmployeeCreateForm
                                    creatable={hideCreateFeedbackForm}
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
            </PageUI>
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
