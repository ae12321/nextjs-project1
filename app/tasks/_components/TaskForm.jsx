import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import React from "react";

const handleSubmit = async (formData) => {
  "use server";
  const content = formData.get("content");
  await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath("/tasks");
};

export default function TaskForm() {
  return (
    <form action={handleSubmit} className="border">
      <div className="join m-4">
        <input
          className="join-item input input-bordered w-full px-4"
          type="text"
          name="content"
          placeholder="type..."
          required
        />
        <button type="submit" className="join-item btn btn-primary ">
          add
        </button>
      </div>
    </form>
  );
}
