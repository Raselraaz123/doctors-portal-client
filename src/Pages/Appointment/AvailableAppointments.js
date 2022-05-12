import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointmentService from "./AppointmentService";
import BookingModal from "./BookingModal";
const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

 
  useEffect(() => {
    fetch(`http://localhost:5000/service`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="text-xl text-secondary text-center my-4">
        Available Appointments : {date && format(date, "PP")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {services.map((service) => (
          <AppointmentService
            service={service}
            key={service._id}
            setTreatment={setTreatment}
          ></AppointmentService>
        ))}
      </div>
      {treatment && (
        <BookingModal
          data={date}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
