import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import React from "react";
import { createTask } from "../_utils/actions";

export default function TaskForm() {
  return (
    <form action={createTask} className="border">
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
