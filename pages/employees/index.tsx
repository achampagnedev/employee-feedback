import React, { useState } from 'react';
import EmployeeAddForm from '../../components/forms/EmployeeAddForm';
import EmployeeListing from '../../components/listings/employees/EmployeeListing';
import Head from 'next/head';
import Nav from '../../components/nav/Nav';
import NavBreadcrumbs from '../../components/nav/NavBreadcrumbs';
import ButtonUI from '../../components/ui/ButtonUI';
import { PrismaClient } from '@prisma/client';

const Index = ({ initialEmployees }) => {
    const [showCreateForm, setShowCreateForm] = useState(false);

    const hideCreateFeedbackForm = () => {
        setShowCreateForm(false);
    };

    return (
        <div className="w-full bg-off-white">
            <Head>
                <title>Employees - PayPay Employee Feedback</title>
            </Head>
            <Nav />
            <div className="w-full max-w-7xl min-h-screen pt-24 pl-4 md:pt-4 md:pl-24 pb-10">
                <main className="w-full">
                    <div className="min-h-full">
                        <NavBreadcrumbs title="Employees" />
                        <div className="flex justify-end">
                            <div>
                                <ButtonUI
                                    text="+ Add Employee"
                                    onClickFn={() => setShowCreateForm(true)}
                                />
                            </div>
                        </div>
                        {showCreateForm && (
                            <div className="pb-8">
                                <EmployeeAddForm
                                    creatable={hideCreateFeedbackForm}
                                />
                            </div>
                        )}
                        <div>
                            <EmployeeListing
                                initialEmployees={initialEmployees}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export async function getServerSideProps() {
    const prisma = new PrismaClient();
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
            initialEmployees: employees,
        },
    };
}

export default Index;
