"use client";

import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-sm btn-error" disabled={pending}>
      {pending ? "deleting..." : "delete"}
    </button>
  );
};

export default function DeleteForm({ id }) {
  return (
    <form>
      <input type="hidden" name="id" defaultValue={id} />
      <SubmitButton />
    </form>
  );
}
