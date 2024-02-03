"use client";

import { useEffect } from "react";
import { createTaskCustom } from "../_utils/actions";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

const SubmitButton = () => {
  const { status, pending } = useFormStatus();
  // console.log({ status, pending });
  return (
    <button type="submit" className="join-item btn btn-primary" disabled={pending}>
      {pending ? "loading..." : "add"}
    </button>
  );
};

const initialState = { message: "" };

export default function TaskFormCustom() {
  const [state, formAction] = useFormState(createTaskCustom, initialState);
  console.log(state);

  useEffect(() => {
    if (state.message === "error") {
      toast.error("error...");
      return;
    }
    if (state.message === "success") {
      toast.success("success...");
      return;
    }
  }, [state]);

  return (
    <form action={formAction} className="border">
      {/* {state.message && <div className="message">{state.message}</div>} */}
      <div className="join m-4">
        <input
          className="join-item input input-bordered w-full px-4"
          type="text"
          name="content"
          placeholder="type..."
          required
        />
        <SubmitButton />
      </div>
    </form>
  );
}
