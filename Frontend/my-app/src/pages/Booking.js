import { useEffect, useState } from "react";
import axios from "axios";

const bookings = () => {
  const [booking, setBooking] = useState([]);
  const initialState = {
    name: "",
    date: "",
  };
  const [fromState, setFormState] = useState(initialState);
  const [submitted, setSubmitted] = useState(true);

  useEffect(() => {
    const getBooking = async () => {
      try {
        if (submitted) {
          let res = await axios.get("http://localhost:3001/api/booking");

          setBooking(res.data.bookings);
          setSubmitted(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getBooking();
  }, [submitted]);
};
export default bookings;
