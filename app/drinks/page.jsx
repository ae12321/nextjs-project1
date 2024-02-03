import React from "react";
import DrinkList from "./_components/DrinkList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  // demo
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("エラーが発生しました");
  }
  // { drinks: [ { idDrink: '11046', strDrink: 'Applecar', }, ...], ... }
  const data = await response.json();
  return data.drinks;
};

export default async function DrinksPage() {
  const drinks = await fetchDrinks();

  return (
    <div>
      <h1 className="text-5xl">DrinksPage</h1>
      <DrinkList drinks={drinks} />
    </div>
  );
}
