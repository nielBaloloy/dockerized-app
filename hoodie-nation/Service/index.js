const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());


app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany({
    include: { posts: true }
  });
  res.json(users);
});


app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({
      data: { name, email }
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
