import { useEffect, useState } from "react";
import axios from "axios";

const Bookings = () => {
  const [booking, setBooking] = useState([]);
  const initialState = {
    name: "",
    date: "",
  };
  const [formState, setFormState] = useState(initialState);
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

  const handlechange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post("http://localhost:3001/api/booking", formState);
    console.log(res.data.bookings);
    console.log(formState);
    setFormState(initialState);
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <div className="form">
      <h1 className="forms">Current Bookings</h1>
      <form onSubmit={handlesubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={handlechange}
          value={formState.subject}
        />
        <br></br>
        <label className="date">Date:</label>
        <input
          type="text"
          id="date"
          onChange={handlechange}
          value={formState.subject}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="results">
        {booking.map((bookings) => (
          <div>
            <h1 className="booking">{bookings.name}</h1>
            <h1 className="booking">{bookings.date}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Bookings;
