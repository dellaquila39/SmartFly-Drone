const express = require('express');
const router = express.Router();

// Ruta de salud (health check)
router.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'El backend está activo y conectado a PostgreSQL 🚀' 
  });
});

// Ruta de prueba (test endpoint)
router.get('/test', (req, res) => {
  res.json({ 
    message: "Backend funcionando correctamente ✅",
    environment: process.env.NODE_ENV || 'development'
  });
});

module.exports = router;