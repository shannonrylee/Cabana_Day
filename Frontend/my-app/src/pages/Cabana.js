import { useEffect, useState } from "react";
import axios from "axios";
import CabanaCard from "../components/CabanaCard";

const viewCabanas = () => {
  //   const [x] = useState([]);
  const [cabana, setCabana] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/cabana").then((res) => {
      console.log(res.data.cabanas);
      setCabana(res.data.cabanas);
    });
  }, []);

  return (
    <div>
      {cabana.map((cabanas) => (
        <CabanaCard
          location={cabanas.location}
          types={cabanas.types}
          price={cabanas.price}
          image={cabanas.image}
        />
      ))}
    </div>
  );
};
export default viewCabanas;
