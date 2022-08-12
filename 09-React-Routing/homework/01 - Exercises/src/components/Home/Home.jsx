import React from "react";
import Cards from "../Cards/Cards";

export default function Home() {
  const [cruise, setCruise] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/cruises")
      .then((res) => res.json())
      .then((data) => {
        setCruise(...cruise, data);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Cards cruise={cruise} />
    </div>
  );
}
