"use server";

import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

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
export const createTaskCustom = async (prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const content = formData.get("content");
  console.log(prevState);

  const Task = z.object({
    content: z.string().min(3),
  });

  try {
    Task.parse({ content });
    await prisma.task.create({
      data: { content },
    });
    revalidatePath("/tasks");
    return { message: "succes" };
  } catch (error) {
    return { message: "error" };
  }
};

export const deleteTask = async (formData) => {
  const id = formData.get("id");
  console.log(formData);
  await prisma.task.delete({
    where: { id },
  });
  revalidatePath("/tasks");
};

export const getTask = async (id) => {
  return prisma.task.findUnique({
    where: { id },
  });
};
export const editTask = async (formData) => {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed") === "on";
  //   console.log({ id, content, completed });
  //   console.log(formData);
  await prisma.task.update({
    where: { id },
    data: { content, completed },
  });
  redirect("/tasks");
};
