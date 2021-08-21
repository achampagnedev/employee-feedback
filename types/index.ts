export type Employee = {
    id: string;
    name: string;
    email: string;
    role: string;
    position: string;
};

export type Feedback = {
    id: number;
    employee: string;
    position: string;
    content: string;
    evaluatorEmployeeId: number;
    userId?: number;
};
