import express from 'express';
import { prisma } from './prisma';

const app = express();

app.use(express.json());

const port = 3333;

app.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;

    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot
        }
    });

    return res.status(201).json({ data: feedback });
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
