"use server";

import prisma from "@/lib/prisma";
import { Service } from "@prisma/client";

export const getServices = async ({
  q,
  status,
  price,
  sort,
}: {
  q: string;
  status: string;
  sort: string;
  price: number;
}) => {
  try {
    if (q) {
      const services = await prisma.service.findMany({
        where: {
          title: {
            contains: q,
          },
          description: {
            contains: q,
          },
        },
      });
      return services;
    } else if (sort) {
      const services = await prisma.service.findMany({
        orderBy: {
          title: sort === "asc" ? "asc" : "desc",
        },
      });
      return services;
    } else if (price) {
      const services = await prisma.service.findMany({
        where: {
          price: {
            equals: price,
          },
        },
      });
      return services;
    } else if (status) {
      const services = await prisma.service.findMany({
        where: {
          status: {
            equals: status === "true" ? true : false,
          },
        },
      });
      return services;
    } else {
      const services = await prisma.service.findMany();
      return services;
    }
  } catch (error) {
    return error;
  }
};

export const getService = async (id: string) => {
  try {
    const service = await prisma.service.findUnique({
      where: { id },
    });
    return service;
  } catch (error) {
    return error;
  }
};

export const createService = async (body: Service) => {
  try {
    const data = await prisma.service.create({
      data: {
        ...body,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const updateService = async (id: string, body: Service) => {
  try {
    const data = await prisma.service.update({
      where: { id },
      data: {
        ...body,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteService = async (id: string) => {
  try {
    const data = await prisma.service.delete({
      where: { id },
    });
    return data;
  } catch (error) {
    return error;
  }
};
