import { useEffect, useState } from "react";
import axios from "axios";
import CabanaCard from "../components/CabanaCard";

const ViewCabanas = () => {
  const [cabana, setCabana] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/cabana").then((res) => {
      console.log(res.data.cabanas);
      setCabana(res.data.cabanas);
    });
  }, []);

  return (
    <div className="types">
      {cabana.map((cabanas) => (
        <CabanaCard
          types={cabanas.types}
          price={cabanas.price}
          image={cabanas.image}
        />
      ))}
    </div>
  );
};
export default ViewCabanas;
