import { getSession } from 'next-auth/client';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

async function createFeedback(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ unauthorized: true });
    }

    const newFeedback = JSON.parse(req.body);

    // get employee who will receive feedback
    const employee = await prisma.employee.findUnique({
        where: {
            id: +newFeedback.newEmployee.value,
        },
    });

    // check if employee already has feedback with the evaluators
    const evaluatorAlreadyAssigned = await prisma.feedback.findMany({
        where: {
            employee: employee.name,
            evaluatorEmployeeId: +newFeedback.newEvaluator.value,
        },
    });

    if (evaluatorAlreadyAssigned.length > 0) {
        return res
            .status(500)
            .json({ error: 'This employee already has Feedback.' });
    }

    // create the feedback object
    const feedback = await prisma.feedback.create({
        data: {
            employee: employee.name,
            position: employee.position,
            content: newFeedback.newFeedback,
            evaluatorEmployeeId: newFeedback.newEvaluator.value,
        },
    });

    if (feedback.id) {
        res.status(200).json(feedback);
    } else {
        return res.status(500).json({ error: 'Could not create Feedback.' });
    }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        return createFeedback(req, res);
    }
}
