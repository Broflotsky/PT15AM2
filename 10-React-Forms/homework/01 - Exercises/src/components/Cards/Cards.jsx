import React from "react";
import Card from "../Card/Card";
import styleCards from "./Cards.module.css";

export default function Cards({ music }) {
  if (music) {
    return (
      <div className={styleCards.container}>
        {music.map((c) => (
          <Card key={c.id} name={c.name} image={c.image} />
        ))}
      </div>
    );
  } else {
    <div>No hay música</div>;
  }
}
