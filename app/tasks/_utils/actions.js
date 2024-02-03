"use server";

import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";

export const getTasks = async () => {
  return prisma.task.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });
};
export const createTask = async (formData) => {
  const content = formData.get("content");
  await prisma.task.create({
    data: { content },
  });
  revalidatePath("/tasks");
};

export const deleteTask = async (formData) => {
  const id = formData.get("id");
  console.log(formData);
  await prisma.task.delete({
    where: { id },
  });
  revalidatePath("/tasks");
};
