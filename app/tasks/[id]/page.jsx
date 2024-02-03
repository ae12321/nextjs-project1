import React from "react";
import { getTask } from "../_utils/actions";
import Link from "next/link";
import EditForm from "../_components/EditForm";

export default async function Task({ params }) {
  const task = await getTask(params.id);
  return (
    <div>
      <Link href={"/tasks"}> back</Link>
      <EditForm task={task} />
    </div>
  );
}
