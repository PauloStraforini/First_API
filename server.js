import express from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

const users = []

app.post ('/usuarios', (req, res) => {

    prisma.user.create({
        data: {
            name: req.body.name,
            numberuser: req.body.numberuser
        }
    }).then(user => {
        res.json(user)
    }).catch(err => {
        res.json({error: 'Ocorreu um erro ao criar o usuário'})
    })


    res.send("Salve Parça")
})

app.get('/usuarios', (req, res) => {
    res.json(users)
})

app.listen(2001)