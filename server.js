import express from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())


 app.post ('/usuarios', async (req, res) => {

     await prisma.user.create({
        data: {
            name: req.body.name,
        }

    })

    res.status(201).json(req.body)
})

app.get('/usuarios', async(req, res) => {

    const user = await prisma.user.findMany()
    res.json(200).json(user)
})

app.listen(2001)