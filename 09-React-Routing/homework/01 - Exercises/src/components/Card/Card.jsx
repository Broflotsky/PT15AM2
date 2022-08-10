import styleCard from "./Card.module.css";

export default function Card({ name, image, itinerary }) {
  console.log(itinerary.da);
  return (
    <div className={styleCard.container}>
      <h4>{name}</h4>
      <img src={image} alt="" />
    </div>
  );
}
