import React from "react";
import { format } from "date-fns";
const BookingModal = ({ setTreatment, treatment, date }) => {
  const { _id, name, slots } = treatment;
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(_id, name, slot);

    // to close the modal
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary text-center mb-2">
            Booking for : {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 justify-items-center "
          >
            <input
              type="text"
              disabled
              value={format(date || new Date(), "PP")}
              className="input input-bordered w-full max-w-xs "
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs "
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="input input-bordered w-full max-w-xs "
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs "
            />
            <input
              type="submit"
              value="submit"
              className="input input-bordered w-full max-w-xs btn btn-secondary "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
