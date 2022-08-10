import Cards from "../Cards/Cards";
import { useEffect, useState } from "react";

export default function Home() {
  const [cruise, setCruise] = useState([]);

  useEffect(() => {
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
