const express = require('express');
const cors = require('cors');
require('dotenv').config();
const routes = require('./routes'); // Importa todas las rutas desde /routes

const app = express();
const PORT = process.env.PORT || 3000;

// ========== MIDDLEWARES ==========
app.use(cors()); // Permite peticiones desde cualquier origen (en desarrollo)
app.use(express.json()); // Habilita el parseo de JSON en las solicitudes

// ========== RUTAS ==========
// Ruta raíz (bienvenida)
app.get('/', (req, res) => {
  res.send(`
    <h1>¡Bienvenido al backend de SmartFly! 🚁</h1>
    <p>Endpoints disponibles:</p>
    <ul>
      <li><a href="/api/health">/api/health</a> - Verificar estado del servidor</li>
      <li><a href="/api/test">/api/test</a> - Endpoint de prueba</li>
    </ul>
  `);
});

// Todas las rutas de la API bajo el prefijo /api
app.use('/api', routes);

// ========== INICIAR SERVIDOR ==========
app.listen(PORT, () => {
  console.log(`
  ===========================================
    Servidor activo en: http://localhost:${PORT}
    Entorno: ${process.env.NODE_ENV || 'development'}
  ===========================================
  `);
});