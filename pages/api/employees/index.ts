import { getSession } from 'next-auth/client';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

async function createEmployee(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ unauthorized: true });
    }

    const newEmployee = JSON.parse(req.body);

    // return error if employee already exists
    const existingEmployee = await prisma.employee.findUnique({
        where: { email: newEmployee.email },
    });

    if (existingEmployee !== null && existingEmployee.id) {
        return res.status(500).json({ error: 'This employee already exists.' });
    }

    // create employee and assign to the current user
    const user = await prisma.user.findUnique({
        where: { email: session.user.email },
    });
    const employee = await prisma.employee.create({
        data: {
            userId: user.id,
            name: newEmployee.name,
            email: newEmployee.email,
            position: newEmployee.position,
            role: newEmployee.role.value,
            roleLabel: newEmployee.role.label,
        },
    });

    if (employee.id) {
        res.status(200).json(employee);
    } else {
        return res.status(500).json({ error: 'Could not create employee.' });
    }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        return createEmployee(req, res);
    }
}
