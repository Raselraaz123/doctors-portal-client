import React, { useEffect, useState } from 'react';
import { format } from "date-fns";
import AppointmentService from './AppointmentService';
const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch(`services.json`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  },[])
  return (
    <div>
      <h1 className="text-xl text-secondary text-center my-4">
        Available Appointments : {format(date, "pp")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {services.map((service) => (
          <AppointmentService
            key={service._id}
            service={service}
          ></AppointmentService>
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointments;