import React from "react";

export default function loading() {
  return (
    <div className="flex flex-col">
      <div className="loading loading-spinner loading-lg"></div>
      <p>処理中...</p>
    </div>
  );
}
