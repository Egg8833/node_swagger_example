
import dotenv from 'dotenv';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import authRoutes from './routes/auth.js';
import helloRoutes from './routes/hello.js';
import { swaggerSpec } from './swagger.js';

dotenv.config();
const app = express();
app.use(express.json());

// Swagger 文件
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 路由
app.use('/', authRoutes);
app.use('/', helloRoutes);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

// 全域錯誤處理
app.use((err, req, res, next) => {
  // 400 Bad Request
  if (err.status === 400) {
    return res.status(400).json({ message: err.message || 'Bad Request' });
  }
  // 401 Unauthorized
  if (err.status === 401) {
    return res.status(401).json({ message: err.message || 'Unauthorized' });
  }
  // 404 Not Found（理論上已由上方 404 handler 處理）
  if (err.status === 404) {
    return res.status(404).json({ message: err.message || 'Not Found' });
  }
  // 其他錯誤
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger docs at http://localhost:${PORT}/api-docs`);
});
