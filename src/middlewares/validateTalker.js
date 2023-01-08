const validateInfo = (req, res, next) => {
  const { name, age, talk } = req.body;
  const { authorization } = req.headers;
  const { watchedAt, rate } = talk;
  const emptyNameMessage = { message: 'O campo "name" é obrigatório' };
  const invalidNameMessage = { message: 'O "name" deve ter pelo menos 3 caracteres' };

  if (!name) return res.status(400).json(emptyNameMessage);
  if (name.length < 3) return res.status(400).json(invalidNameMessage);
  
  next();
};

module.exports = {
  validateInfo,
};