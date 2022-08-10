import styleCard from "./Card.module.css";
import { NavLink } from "react-router-dom";
import CardDetail from "../CardDetail/CardDetail";

export default function Card({ name, image, id }) {
  return (
    <div className={styleCard.container}>
      <NavLink to={<CardDetail />}>
        <h4>{name}</h4>
        <img src={image} alt="" />
      </NavLink>
    </div>
  );
}
