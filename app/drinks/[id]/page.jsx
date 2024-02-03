import Image from "next/image";
import Link from "next/link";
import React from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const fetchDrink = async (id) => {
  const response = await fetch(`${url}${id}`);
  if (!response.ok) {
    throw new Error("エラーが発生しました");
  }
  const data = await response.json();
  return data.drinks[0];
};

export default async function Drink({ params }) {
  const drink = await fetchDrink(params.id);
  //   console.log(drink);

  const drinkName = drink.strDrink;
  const drinkImage = drink.strDrinkThumb;

  return (
    <div>
      {/* <h1 className="text-5xl">{params.id}</h1> */}
      <Link href="/drinks" className="btn btn-primary my-8">
        back
      </Link>
      <h1>{drinkName}</h1>
      <div>
        <Image src={drinkImage} alt="" width={300} height={300} />
        {/* <img src={drinkImage} alt="" className="w-full" /> */}
      </div>
    </div>
  );
}
