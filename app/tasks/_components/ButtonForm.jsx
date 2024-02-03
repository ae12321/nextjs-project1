import React from "react";
import { deleteTask } from "../_utils/actions";

function DeleteButton({ id }) {
  return (
    <form action={deleteTask}>
      <input type="text" name="id" value={id} hidden />
      <button className="btn btn-error btn-sm">delete</button>
    </form>
  );
}
function EditButton() {
  return <button className="btn btn-info btn-sm">edit</button>;
}

export default function ButtonForm({ id }) {
  return (
    <div className="flex ">
      <EditButton id={id} />
      <DeleteButton id={id} />
    </div>
  );
}