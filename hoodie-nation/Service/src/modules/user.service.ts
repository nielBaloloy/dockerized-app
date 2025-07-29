import { PrismaClient } from '@prisma/client';
import { CreateUserInput,userArgs } from '../dtos/args';

const prisma = new PrismaClient();

const UserService = {
  async getAllUsers() {
    try {
      const users = await prisma.users.findMany({
        where:{
          isActive : true

        }
      });
     
      return users;
    } catch (error) {
      throw error;
    }
  },

  async createUser(user: userArgs) {
    try {
      const newUser = await prisma.users.create({
        data: user,
      });
      return newUser;
    } catch (error) {
      throw error;
    }
  }
};

export default UserService;
