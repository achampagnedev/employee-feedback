import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const options = {
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    jwt: {
        signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
    },
    database: process.env.DATABASE_URL,
    adapter: PrismaAdapter(prisma),
};

export default NextAuth(options);
