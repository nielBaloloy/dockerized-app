import { Router } from 'express';
import { createUser, getUsers,createRole } from './user.controller';
const router = Router();

//routes for controllers
router.get('/', getUsers);
router.post('/addUser', createUser);
router.post('/roles/add', createRole);

export default router;