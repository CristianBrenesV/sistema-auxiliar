import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { createProxyMiddleware } from 'http-proxy-middleware';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

// Variables de entorno
const {
  PORT,
  AUTH_SERVICE_URL,
  USUARIOS_SERVICE_URL,
  TERCEROS_SERVICE_URL,
  CENTROS_COSTOS_SERVICE_URL,
  REPORTES_SERVICE_URL,
  BITACORA_SERVICE_URL,
  ASIENTOS_SERVICE_URL,
  JWT_SECRET
} = process.env;

// ----------------------------
// Middleware de JWT (opcional)
// ----------------------------
const verifyJWT = (req: any, res: any, next: any) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ error: 'No token provided' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET!);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

// ----------------------------
// Proxies a microservicios
// ----------------------------
app.use('/auth', createProxyMiddleware({ target: AUTH_SERVICE_URL!, changeOrigin: true, pathRewrite: {'^/auth': ''} }));

app.use('/usuarios', verifyJWT, createProxyMiddleware({ target: USUARIOS_SERVICE_URL!, changeOrigin: true, pathRewrite: {'^/usuarios': ''} }));

app.use('/terceros', verifyJWT, createProxyMiddleware({ target: TERCEROS_SERVICE_URL!, changeOrigin: true, pathRewrite: {'^/terceros': ''} }));

app.use('/centros-costos', verifyJWT, createProxyMiddleware({ target: CENTROS_COSTOS_SERVICE_URL!, changeOrigin: true, pathRewrite: {'^/centros-costos': ''} }));

app.use('/reportes', verifyJWT, createProxyMiddleware({ target: REPORTES_SERVICE_URL!, changeOrigin: true, pathRewrite: {'^/reportes': ''} }));

app.use('/bitacoras', verifyJWT, createProxyMiddleware({ target: BITACORA_SERVICE_URL!, changeOrigin: true, pathRewrite: {'^/bitacoras': ''} }));

app.use('/asientos', verifyJWT, createProxyMiddleware({ target: ASIENTOS_SERVICE_URL!, changeOrigin: true, pathRewrite: {'^/asientos': ''} }));

// ----------------------------
// Iniciar servidor
// ----------------------------
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});