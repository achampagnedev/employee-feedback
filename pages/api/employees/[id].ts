import { getSession } from 'next-auth/client';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

async function getEmployee(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ unauthorized: true });
    }

    const { id } = req.query;

    const employee = await prisma.employee.findUnique({
        where: {
            id: +id,
        },
    });

    if (employee.id) {
        res.status(200).json(employee);
    } else {
        return res.status(500).json({ error: 'Could not get Employee.' });
    }
}

async function updateEmployee(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ unauthorized: true });
    }

    const { id } = req.query;
    const { newName, newPosition, newRole, newRoleLabel } = JSON.parse(
        req.body
    );

    const employee = await prisma.employee.update({
        where: {
            id: +id,
        },
        data: {
            name: newName,
            position: newPosition,
            role: newRole,
            roleLabel: newRoleLabel,
        },
    });

    if (employee.id) {
        res.status(200).json(employee);
    } else {
        return res.status(500).json({ error: 'Could not update Employee.' });
    }
}

async function deleteEmployee(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ unauthorized: true });
    }

    const { id } = req.query;

    // delete employee
    const employeeToDelete = await prisma.employee.delete({
        where: {
            id: +id,
        },
    });

    // delete feedback assigned to employee
    await prisma.feedback.deleteMany({
        where: {
            evaluatorEmployeeId: +id,
        },
    });

    if (employeeToDelete.id) {
        res.status(200).json(employeeToDelete);
    } else {
        return res.status(500).json({ error: 'Could not delete Employee.' });
    }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        return getEmployee(req, res);
    }
    if (req.method === 'PUT') {
        return updateEmployee(req, res);
    }

    if (req.method === 'DELETE') {
        return deleteEmployee(req, res);
    }
}
