import React from "react";

const url = "https://pokeapi.co/api/v2/pokemon/ditto";

export default async function ServerPage() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  return (
    <div>
      <h1 className="text-5xl">ServerPage</h1>
      <textarea
        name=""
        id=""
        cols="60"
        rows="20"
        className="w-1000px"
        defaultValue={JSON.stringify(data, null, 4)}
      ></textarea>
    </div>
  );
}
