import Head from 'next/head';
import React from 'react';
import LoginForm from '../components/forms/LoginForm';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-off-white">
            <Head>
                <title>Login - Employee Feedback</title>
            </Head>
            <main className="flex flex-row min-h-screen justify-center w-full">
                <div className="flex min-h-screen flex-col justify-center items-center w-full">
                    <div className="flex items-center mb-6">
                        <h1 className="text-grey-night mb-2 text-xl">
                            Employee feedback
                        </h1>
                    </div>
                    <LoginForm />
                </div>
            </main>
        </div>
    );
};

export default Home;
