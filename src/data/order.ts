"use server";

import prisma from "@/lib/prisma";
import { Order } from "@prisma/client";

export const getOrders = async ({ id }: { id: string }) => {
  try {
    const orders = await prisma.order.findMany({
      where: {
        userId: id,
      },
    });
    return orders;
  } catch (error) {
    return error;
  }
};
