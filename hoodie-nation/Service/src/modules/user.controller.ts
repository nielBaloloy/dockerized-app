import { Request, Response } from 'express';
import  UserService from './user.service';
import {createUserSchema,UserField} from '../dtos/args';

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await UserService.getAllUsers(); 
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function createUser(req: Request, res: Response) {
try   {
    const data = UserField.parse(req.body);
    const user = await UserService.createUser(data);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function createRole(req:Request, res:Response){
try   {
    const data = createUserSchema.parse(req.body);
    const user = await UserService.createUser(data);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}
