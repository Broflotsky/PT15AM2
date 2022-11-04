import React from "react";
import Card from "../Card/Card";
import styleCards from "./Cards.module.css";

export default function Cards({ cruise }) {
  if (cruise) {
    return (
      <div className={styleCards.container}>
        {cruise.map((c) => (
          <Card
            key={c.id}
            name={c.name}
            image={c.image}
            about={c.about}
            itinerary={c.itinerary}
            map={c.map}
            id={c.id}
          />
        ))}
      </div>
    );
  } else {
    <div>No hay crucero</div>;
  }
}
