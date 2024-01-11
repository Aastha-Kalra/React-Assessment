// 2.Give an Example of Data Binding for Ticket Booking.

import React, { useState } from "react";
const Question2 = () => {
  const [destination, setDestination] = useState("");
  const [ticketQuantity, setTicketQuantity] = useState("");

  const calculateTotal = () => {
    const ticketPrice = 50;
    const quantity = parseInt(ticketQuantity) || 0;
    return quantity * ticketPrice;
  };

  const handleTicketQuantity = (e) => {
    setTicketQuantity(parseInt(e.target.value));
  };
  const handleBooking = () => {
    if (destination && ticketQuantity !== "") {
      alert("Tickets Booked Successfully");
      setDestination("");
      setTicketQuantity("");
    } else {
      alert("Please fill all the fields");
    }
  
  };
  const handleDestination = (e) => {
    const input = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setDestination(input);
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col text-3xl p-4 gap-10 ">
        <h1>Ticket Booking Appliction</h1>
        <div className="w-full justify-center items-center flex md:flex-row flex-col ">
          <label htmlFor="destination">Destination Name:</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={handleDestination}
            className="m-2 bg-slate-300 rounded-lg focus:outline-none p-2 text-red-600 text-2xl"
            placeholder="Enter your destination"
          />
        </div>
        <div className="w-full justify-center items-center flex md:flex-row flex-col">
          <label htmlFor="ticketQuantity">Number of Tickets:</label>
          <input
            type="number"
            id="ticketQuantity"
            value={ticketQuantity}
            onChange={handleTicketQuantity}
            className="m-2 bg-slate-300 rounded-lg focus:outline-none p-2 text-red-600 text-2xl"
          />
        </div>

        <div className="flex justify-center items-center">
          <label htmlFor="totalCost">Total Cost:</label>
          <p className="mx-3"> {`${calculateTotal().toFixed(2)}`}</p>
        </div>
        <div className="flex justify-center items-center mt-12">
          <button
            onClick={handleBooking}
            className="bg-yellow-400 p-4 rounded-2xl font-bold hover:bg-yellow-500 text-green-800"
          >
            Book Tickets
          </button>
        </div>
      </div>
    </>
  );
};

export default Question2;
