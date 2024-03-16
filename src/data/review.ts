"use server";

import prisma from "@/lib/prisma";
import { Review } from "@prisma/client";

export const getReviews = async ({ id }: { id: string }) => {
  try {
    const reviews = await prisma.review.findMany({
      where: {
        productId: id,
      },
    });
    return reviews;
  } catch (error) {
    return error;
  }
};

export const createReview = async (data: Review) => {
  try {
    const review = await prisma.review.create({
      data,
    });
    return review;
  } catch (error) {
    return error;
  }
};

export const updateReview = async (id: string, data: Review) => {
  try {
    const review = await prisma.review.update({
      where: {
        id,
      },
      data,
    });
    return review;
  } catch (error) {
    return error;
  }
};

export const deleteReview = async (id: string) => {
  try {
    const review = await prisma.review.delete({
      where: {
        id,
      },
    });
    return review;
  } catch (error) {
    return error;
  }
};
