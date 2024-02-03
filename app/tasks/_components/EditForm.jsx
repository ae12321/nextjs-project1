import React from "react";
import { editTask } from "../_utils/actions";

export default function EditForm({ task }) {
  //   console.log(task);
  return (
    <div>
      <form action={editTask} className="">
        <input type="text" name="id" value={task.id} hidden />
        <input
          type="text"
          required
          defaultValue={task.content}
          name="content"
          className="input input-bordered w-full"
        />
        <div>
          <label htmlFor="completed" className="label cursor-pointer">
            <span className="label-text">completed</span>
            <input
              type="checkbox"
              defaultChecked={task.completed}
              id="completed"
              name="completed"
              className="checkbox checkbox-primary checkbox-sm"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary block">
          edit
        </button>
      </form>
    </div>
  );
}
