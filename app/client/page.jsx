"use client";

import React, { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  return (
    <div>
      <h1 className="text-5xl">CounterPage</h1>
      <p className="text-3xl text-center">{count}</p>
      <button className="btn btn-primary block w-full" onClick={increment}>
        Increment
      </button>
      <button className="btn btn-secondary block w-full" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}
