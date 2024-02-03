import React from "react";
import Link from "next/link";
import DeleteForm from "./DeleteForm";

function EditButton({ id }) {
  return (
    <Link href={`/tasks/${id}`} className="btn btn-info btn-sm">
      edit
    </Link>
  );
}

export default function ButtonForm({ id }) {
  return (
    <div className="flex ">
      <EditButton id={id} />
      <DeleteForm id={id} />
    </div>
  );
}
