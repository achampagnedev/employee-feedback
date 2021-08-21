import { employees } from './seeds/employees';
import { feedbacks } from './seeds/feedbacks';
import prisma from '../lib/prisma';

async function main() {
    // Seed employees. IMPORTANT: Also seeds the needed test accounts as employees
    for (let employee of employees) {
        await prisma.employee.create({
            data: employee,
        });
    }

    // Seed feedbacks
    for (let feedback of feedbacks) {
        await prisma.feedback.create({
            data: feedback,
        });
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
