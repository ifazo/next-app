"use server";

import prisma from "@/lib/prisma";

export const getProducts = async ({
  q,
  limit,
  skip,
  sort,
  category,
  price,
  rating,
}: {
  q: string;
  limit: number;
  skip: number;
  sort: string;
  category: string;
  price: number;
  rating: number;
}) => {
  try {
    if (q) {
      const products = await prisma.product.findMany({
        where: {
          title: {
            contains: q,
          },
          description: {
            contains: q,
          },
        },
        take: limit,
        skip: skip,
      });
      return products;
    }
    if (sort) {
      const products = await prisma.product.findMany({
        take: limit,
        skip: skip,
        orderBy: {
          title: sort === "asc" ? "asc" : "desc",
        },
      });
      return products;
    }
    if (category) {
      const products = await prisma.product.findMany({
        where: {
          category: {
            equals: category,
          },
        },
        take: limit,
        skip: skip,
      });
      return products;
    }
    if (price) {
      const products = await prisma.product.findMany({
        where: {
          price: {
            lte: price,
          },
        },
        take: limit,
        skip: skip,
      });
      return products;
    }
    if (rating) {
      const products = await prisma.product.findMany({
        where: {
          rating: {
            gte: rating,
          },
        },
        take: limit,
        skip: skip,
      });
      return products;
    }
    const products = await prisma.product.findMany({
      take: limit,
      skip: skip,
    });
    return products;
  } catch (error) {
    return error;
  }
};

export const getProduct = async (id: string) => {
  try {
    const product = await prisma.product.findUnique({ where: { id } });
    return product;
  } catch (error) {
    return error;
  }
};

export const createProduct = async (values: any) => {
  try {
    const product = await prisma.product.create({ data: values });
    return product;
  } catch (error) {
    return error;
  }
};

export const updateProduct = async (id: string, values: any) => {
  try {
    const product = await prisma.product.update({
      where: { id },
      data: values,
    });
    return product;
  } catch (error) {
    return error;
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const product = await prisma.product.delete({ where: { id } });
    return product;
  } catch (error) {
    return error;
  }
};
