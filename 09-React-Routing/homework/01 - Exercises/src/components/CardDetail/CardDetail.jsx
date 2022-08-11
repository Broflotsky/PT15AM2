import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./CardDetail.module.css";

export default function CardDetail() {
  const [cruiseDetail, setCruiseDetail] = React.useState({});
  const { id } = useParams();
  React.useEffect(() => {
    fetch(`http://localhost:3001/cruises/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.about);
        setCruiseDetail(data);
      })
      .catch((error) => console.log(error));
    return () => setCruiseDetail({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className={styles.container}>
      <h1>{cruiseDetail.name}</h1>
      <img src={cruiseDetail.image} alt={cruiseDetail.name + "picture"} />
      <p>{cruiseDetail.about}</p>
      {cruiseDetail.itinerary &&
        cruiseDetail.itinerary.map((d) => (
          <div key={d.date}>
            <p>{d.day}</p>
            <p>{d.date}</p>
            <p>{d.city}</p>
            <p>{d.departure_time}</p>
            <p>{d.arrival_time}</p>
          </div>
        ))}
      <img src={cruiseDetail.map} alt={cruiseDetail.name + "map"} />
      <button onClick={backToHome}>Volver al Home</button>
    </div>
  );
}
