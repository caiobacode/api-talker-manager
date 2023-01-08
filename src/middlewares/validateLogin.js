const validateInputs = (req, res, next) => {
  const { email, password } = req.body;

  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const emptyEmailMessage = { message: 'O campo "email" é obrigatório' };
  const invalidEmailMessage = { message: 'O "email" deve ter o formato "email@email.com"' };

  const emptyPasswordMessage = { message: 'O campo "password" é obrigatório' };
  const invalidPasswordMessage = { message: 'O "password" deve ter pelo menos 6 caracteres' };

  if (!email) return res.status(400).json(emptyEmailMessage);
  if (!regexEmail.test(email)) return res.status(400).json(invalidEmailMessage);

  if (!password) return res.status(400).json(emptyPasswordMessage);
  if (password.length < 6) return res.status(400).json(invalidPasswordMessage);

  next();
};

module.exports = {
  validateInputs,
};