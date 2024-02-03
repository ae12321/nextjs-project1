import React from "react";

export default function DrinksLayout({ children }) {
  return (
    <div>
      {/*  */}

      <div className="mockup-code mb-8">
        <pre data-prefix="#">
          <code>npm install </code>
        </pre>
      </div>
      {children}
    </div>
  );
}
