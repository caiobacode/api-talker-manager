const express = require('express');
const path = require('path');
const fs = require('fs/promises');
const { validateInputs } = require('./middlewares/validateLogin');
const { 
  authName, 
  authAge, 
  authTalk, 
  authRate,
  authToken,
  authWatchedAt,
} = require('./middlewares/talkerAuth/validateTalker');

const talkerJson = path.resolve(__dirname, './talker.json');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send('oi');
});

app.listen(PORT, () => {
  console.log('Online');
});

app.get('/talker', async (req, res) => {
  const data = JSON.parse(await fs.readFile(talkerJson));
  res.status(200).json(data);
});

app.get('/talker/search', authToken, async (req, res) => {
  const query = Object.values(req.query)[0];
  const talkers = JSON.parse(await fs.readFile(talkerJson));
  const data = talkers.filter((talker) => talker.name.includes(query));
  res.status(200).json(data);
});

app.get('/talker/:id', async (req, res) => {
  const talkers = JSON.parse(await fs.readFile(talkerJson));
  const data = talkers.find((talker) => talker.id === Number(req.params.id));
  const errorMsg = { message: 'Pessoa palestrante não encontrada' };
  if (!data) res.status(404).json(errorMsg);
  else res.status(200).json(data);
});

app.post('/login', validateInputs, (req, res) => {
  const id = Math.random().toString().substring(0, 16);
  res.status(200).json({ token: id });
});

app.post('/talker', 
  authToken,
  authName, 
  authAge, 
  authTalk, 
  authRate,
  authWatchedAt,
  async (req, res) => {
  const talkers = JSON.parse(await fs.readFile(talkerJson));
  const oneTalker = {
    id: talkers.length + 1,
    ...req.body,
  };
  talkers.push(oneTalker);
  await fs.writeFile(talkerJson, JSON.stringify(talkers, null, 2));
  res.status(201).json(oneTalker);
});

app.put('/talker/:id', 
  authToken,
  authName, 
  authAge, 
  authTalk, 
  authRate,
  authWatchedAt,
  async (req, res) => {
  const { id } = req.params;
  const talkers = JSON.parse(await fs.readFile(talkerJson));
  const index = talkers.findIndex((talker) => talker.id === Number(id));
  talkers[index] = {
    id: Number(id),
    ...req.body,
  };
  await fs.writeFile(talkerJson, JSON.stringify(talkers, null, 2));
  res.status(200).json(talkers[index]);
});

app.delete('/talker/:id', authToken, async (req, res) => {
  const { id } = req.params;
  const talkers = JSON.parse(await fs.readFile(talkerJson));
  const newTalkers = talkers.filter((talker) => talker.id !== Number(id));
  await fs.writeFile(talkerJson, JSON.stringify(newTalkers, null, 2));
  res.status(204).end();
});