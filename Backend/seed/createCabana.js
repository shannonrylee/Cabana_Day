const db = require("../db");
const { Cabana } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const createCabana = async () => {
  const cabana = [
    {
      location: "on the Beach",
      types: "2 person",
      bookedDates: ["7/30/22", "8/02/22", "8/05/22"],
      price: "$200",
      image:
        "https://www.oceanhouseri.com/wp-content/uploads/2019/07/Sun-Bed-3.jpg",
    },
    {
      location: "off the Beach",
      types: "2 person",
      bookedDates: ["7/30/22", "8/02/22", "8/05/22"],
      price: "$100",
      image:
        "https://i.pinimg.com/originals/d8/6f/80/d86f808c9baf6425f358b0c306d7d3db.jpg",
    },
    {
      location: "on the Beach",
      types: "4 person",
      bookedDates: ["7/30/22", "8/02/22", "8/05/22"],
      price: "$400",
      image:
        "https://i.pinimg.com/736x/33/c6/15/33c61522da2b64fefa8fa1d5829def85--beach-cabana-sanya.jpg",
    },
    {
      location: "off the Beach",
      types: "4 person",
      bookedDates: ["7/30/22", "8/02/22", "8/05/22"],
      price: "$300",
      image:
        "https://serenityatcoconutbay.com/wp-content/uploads/2018/03/caba-na-na-na-na-2-1-2-1-1-1-1.png",
    },
  ];
  await Cabana.insertMany(cabana);
  console.log("Bookings have been added");
};

const run = async () => {
  await createCabana();
  db.close();
};
run();
