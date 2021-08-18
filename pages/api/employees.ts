import { getSession } from 'next-auth/client';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

async function createEmployee(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ unauthorized: true });
    }

    const user = await prisma.user.findUnique({
        where: { email: session.user.email },
    });

    const newEmployee = JSON.parse(req.body);

    if (newEmployee.email === user.email) {
        return res
            .status(500)
            .json({ error: "validation error: can't add yourself" });
    }

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
        return res.status(500).json({ error: 'could not create employee' });
    }
}

async function deleteEmployee(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ unauthorized: true });
    }

    const idOfEmployee = JSON.parse(req.body);

    const employeeToDelete = await prisma.employee.delete({
        where: idOfEmployee,
    });

    if (employeeToDelete.id) {
        res.status(200).json(employeeToDelete);
    } else {
        return res.status(500).json({ error: 'could not delete employee' });
    }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        return createEmployee(req, res);
    }

    if (req.method === 'DELETE') {
        return deleteEmployee(req, res);
    }
}
