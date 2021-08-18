import React, { useState } from 'react';
import Head from 'next/head';
import Nav from '../../components/nav/Nav';
import NavBreadcrumbs from '../../components/nav/NavBreadcrumbs';
import { IS_MANAGER } from '../../constants';
import ButtonUI from '../../components/ui/ButtonUI';
import FeedbackCreateForm from '../../components/forms/FeedbackCreateForm';
import FeedbackListing from '../../components/listings/feedbacks/FeedbackListing';

const Index = () => {
    const [showCreateForm, setShowCreateForm] = useState(false);

    const hideCreateFeedbackForm = () => {
        setShowCreateForm(false);
    };

    return (
        <div className="w-full bg-off-white">
            <Head>
                <title>Feedbacks - PayPay Employee Feedback</title>
            </Head>
            <Nav />
            <div className="w-full max-w-7xl min-h-screen pt-24 pl-4 md:pt-4 md:pl-24 pb-10">
                <main className="w-full max-w-7xl">
                    <div className="min-h-full">
                        <NavBreadcrumbs title="Feedbacks" />
                        {IS_MANAGER && (
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
                                    />
                                )}
                            </>
                        )}
                        <FeedbackListing />
                    </div>
                </main>
            </div>
        </div>
    );
};

// export async function getServerSideProps() {}

export default Index;
