import prisma from "@/utils/db";
import React from "react";
import ButtonForm from "./ButtonForm";

export default async function TaskList() {
  const tasks = await prisma.task.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });
  console.log(tasks.length);

  if (tasks.length === 0) return <div>No tasks</div>;
  console.log("first");
  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          className="border rounded-lg p-2 mt-2 shadow-lg flex justify-between items-center"
        >
          <p className={`text-lg ${task.completed ? "line-through" : ""}`}>{task.content}</p>
          <ButtonForm id={task.id} />
        </li>
      ))}
    </ul>
  );
}
