import React from 'react';
import { signIn } from 'next-auth/client';
import ButtonUI from '../ui/ButtonUI';
import FormUI from '../ui/FormUI';
import { ROUTES } from '../../constants';

const LoginForm = () => {
    return (
        <div className="bg-white divide-y drop-shadow-md">
            <FormUI headerText="Login">
                <div className="flex flex-col items-center">
                    <div className="w-72">
                        <ButtonUI
                            onClickFn={() =>
                                signIn('google', {
                                    callbackUrl: `${window.location.origin}${ROUTES.FEEDBACKS}`,
                                })
                            }
                            text="Sign In with Google"
                        />
                    </div>
                </div>
            </FormUI>
        </div>
    );
};

export default LoginForm;
