const authToken = (req, res, next) => {
  const { authorization } = req.headers;
  const emptyTokenMessage = { message: 'Token não encontrado' };
  const invalidTokenMsg = { message: 'Token inválido' };
  
  if (!authorization) return res.status(401).json(emptyTokenMessage);
  if (authorization.length !== 16) return res.status(401).json(invalidTokenMsg);
  
  next();
};

const authName = (req, res, next) => {
  const { name } = req.body;
  const emptyNameMessage = { message: 'O campo "name" é obrigatório' };
  const invalidNameMessage = { message: 'O "name" deve ter pelo menos 3 caracteres' };

  if (!name) return res.status(400).json(emptyNameMessage);
  if (name.length < 3) return res.status(400).json(invalidNameMessage);

  next();
};

const authAge = (req, res, next) => {
  const { age } = req.body;
  const emptyAgeMessage = { message: 'O campo "age" é obrigatório' };
  const invalidAgeMessage = { message: 'A pessoa palestrante deve ser maior de idade' };

  if (!age) return res.status(400).json(emptyAgeMessage);
  if (age < 18) return res.status(400).json(invalidAgeMessage);

  next();
};

const authTalk = (req, res, next) => {
  const { talk } = req.body;
  const emptyTalkMessage = { message: 'O campo "talk" é obrigatório' };

  if (!talk) return res.status(400).json(emptyTalkMessage);

  next();
};

const authRate = (req, res, next) => {
  const { rate } = req.body.talk;
  const emptyRateMessage = { message: 'O campo "rate" é obrigatório' };
  const invalidRateMessage = { message: 'O campo "rate" deve ser um inteiro de 1 à 5' };
  const integerOrNot = !Number.isInteger(rate);

  if (rate === undefined) return res.status(400).json(emptyRateMessage);
  if (rate < 1 || rate > 5 || integerOrNot) return res.status(400).json(invalidRateMessage);

  next();
};

const authWatchedAt = (req, res, next) => {
  const { watchedAt } = req.body.talk;

  const emptyWatchedMessage = { message: 'O campo "watchedAt" é obrigatório' };
  const invalidWarchedMessage = { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' };
  const formatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;  

  if (!watchedAt) return res.status(400).json(emptyWatchedMessage);
  if (!formatDate.test(watchedAt)) return res.status(400).json(invalidWarchedMessage);
  
  next();
};

module.exports = {
  authToken,
  authName,
  authAge,
  authTalk,
  authRate,
  authWatchedAt,
};