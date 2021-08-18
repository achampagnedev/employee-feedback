import '../styles/globals.css';
import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import React from 'react';
import { ProvideEmployees } from '../context/EmployeesContext';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider session={pageProps.session}>
            <ProvideEmployees>
                <Component {...pageProps} />
            </ProvideEmployees>
        </Provider>
    );
}

export default MyApp;
