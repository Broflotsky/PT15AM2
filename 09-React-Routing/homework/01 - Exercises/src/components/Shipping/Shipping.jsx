import React from "react";
import style from "./Shipping.module.css";

export default function Shipping() {
  return (
    <div className={style.cruises}>
      <ul>
        <li>Carnival</li>
        <li>Azamara</li>
        <li>Costa</li>
        <li>CroisiMer</li>
        <li>Explora</li>
      </ul>
    </div>
  );
}
