import { getSession } from 'next-auth/client';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

async function updateFeedback(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ unauthorized: true });
    }

    const { id } = req.query;

    const newFeedback = JSON.parse(req.body);

    const feedback = await prisma.feedback.update({
        where: {
            id: +id,
        },
        data: {
            content: newFeedback.newFeedback,
        },
    });

    if (feedback.id) {
        res.status(200).json(feedback);
    } else {
        return res.status(500).json({ error: 'Could not update Feedback.' });
    }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        return updateFeedback(req, res);
    }
}
