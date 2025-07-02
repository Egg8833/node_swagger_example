
import { Router } from 'express';
import { hello } from '../controllers/helloController.js';
import { authenticateToken } from '../utils/authenticateToken.js';
const router = Router();

/**
 * @swagger
 * /hello:
 *   get:
 *     summary: 取得 Hello 訊息 (需 JWT)
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: 成功
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       401:
 *         description: 未授權，缺少或錯誤的 JWT
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.get('/hello', authenticateToken, hello);

export default router;
