// "use server";

import prisma from "@/lib/prisma";
import { User, UserRole } from "@prisma/client";

export const getUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    return error;
  }
};

export const getUsersByRole = async (role: UserRole) => {
  try {
    const users = await prisma.user.findMany({
      where: {
        role,
      },
    });
    return users;
  } catch (error) {
    return error;
  }
};

export const getUser = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    return error;
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    return error;
  }
};

export const createUser = async (data: User) => {
  try {
    const user = await prisma.user.create({
      data,
    });
    return user;
  } catch (error) {
    return error;
  }
};

export const updateUser = async (id: string, data: User) => {
  try {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data,
    });
    return user;
  } catch (error) {
    return error;
  }
};

export const deleteUser = async (id: string) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    return error;
  }
};
