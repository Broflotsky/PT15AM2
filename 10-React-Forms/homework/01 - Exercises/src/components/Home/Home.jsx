import React from "react";
import Cards from "../Cards/Cards";

export default function Home() {
  const [music, setMusic] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/music")
      .then((res) => res.json())
      .then((data) => {
        setMusic(...music, data);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Cards music={music} />
    </div>
  );
}
