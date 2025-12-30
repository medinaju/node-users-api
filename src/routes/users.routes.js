const express = require('express');

const router = express.Router();

// rota GET /users
router.get('/users', (req, res) => {
  res.json({ message: 'Rota de usuários funcionando 🚀' });
});

module.exports = router;
