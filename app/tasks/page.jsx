import React from "react";
import TaskForm from "./_components/TaskForm";
import TaskList from "./_components/TaskList";
import TaskFormCustom from "./_components/TaskFormCustom";

export const dynamic = "force-dynamic";

export default function TasksPage() {
  return (
    <div>
      <h1 className="text-5xl">TasksPage</h1>
      <hr className="my-8" />

      <div>
        <TaskFormCustom />
        <TaskList />
      </div>
    </div>
  );
}
