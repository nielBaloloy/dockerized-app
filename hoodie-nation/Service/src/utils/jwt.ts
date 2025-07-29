import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/env';

export const signToken = (payload: object) => jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
export const verifyToken = (token: string) => jwt.verify(token, JWT_SECRET);
