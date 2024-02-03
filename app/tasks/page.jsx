import React from "react";
import AddForm from "./_components/AddForm";
import TaskList from "./_components/TaskList";

export default function TasksPage() {
  return (
    <div>
      <h1 className="text-5xl">TasksPage</h1>

      <div>
        {/* <AddForm /> */}
        <TaskList />
      </div>
    </div>
  );
}
