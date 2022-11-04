import React from "react";

export default function Promotions() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "2em",
      }}
    >
      <img
        style={{ width: "50vw" }}
        src="https://cdn-content.crucerum.com/public/storage/destinos/1517345477.jpg"
        alt="prom1"
      />
      <img
        style={{ width: "50vw", paddingTop: "2em" }}
        src="https://www.tarjetadeoferta.com/uploads/contest_det/avatar_dets/000/000/002/original/Banner.jpg"
        alt="prom2"
      />
      <img
        style={{ width: "50vw", paddingTop: "2em" }}
        src="https://static.traveltek.net/uploaded/2020/2/1581093734_hpbfredolsenjanv2.jpg"
        alt="prom3"
      />
    </div>
  );
}
