import React from "react";

export default function DrinkList({ drinks }) {
  return (
    <div>
      <ul className="menu menu-vertical pl-0">
        {drinks.map((drink) => (
          <li key={drink.idDrink}>
            <a href={`/drinks/${drink.idDrink}`} className="font-bold">
              {drink.strDrink}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
