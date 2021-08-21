import Head from 'next/head';
import React from 'react';
import { useSession } from 'next-auth/client';
import LoginForm from '../components/forms/LoginForm';
import Image from 'next/image';

const Home: React.FC = () => {
    const [session, loading] = useSession();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-off-white">
            <Head>
                <title>
                    {!session && !loading ? 'Login' : 'Feedbacks'} - PayPay
                    Employee Feedback
                </title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <main className="flex flex-col-reverse md:flex-row min-h-screen justify-center w-full">
                <div className="flex min-h-screen flex-col justify-center items-center md:w-full">
                    <div className="flex items-center mb-6">
                        <Image
                            className="w-40"
                            src="/paypay.png"
                            alt="PayPay Logo"
                            width={146}
                            height={50}
                        />
                        <p className="ml-1 mt-2.5 text-grey-night mb-0 text-xs">
                            employee feedback
                        </p>
                    </div>
                    <LoginForm />
                </div>
            </main>
        </div>
    );
};

export default Home;
