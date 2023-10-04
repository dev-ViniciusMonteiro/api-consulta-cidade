const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/consulta-cep', async (req, res) => {
  const cep = req.body.cep.replace(/\D/g, '');

  if (cep.length !== 8) {
    return res.status(400).json({ error: 'CEP inválido' });
  }

  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar CEP' });
  }
});

module.exports = router;