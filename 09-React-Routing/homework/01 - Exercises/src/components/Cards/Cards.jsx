import Card from "../Card/Card";

export default function Cards({ cruise }) {
  if (cruise) {
    return (
      <div>
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
