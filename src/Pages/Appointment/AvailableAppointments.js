import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointmentService from "./AppointmentService";
import BookingModal from "./BookingModal";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
const AvailableAppointments = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date || new Date(), "PP");

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(
      `https://mysterious-crag-06032.herokuapp.com/available?date=${formattedDate}`
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  // useEffect(() => {
  //   fetch(`https://mysterious-crag-06032.herokuapp.com/available?date=${formattedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [formattedDate]);
  return (
    <div>
      <h1 className="text-xl text-secondary text-center my-4">
        Available Appointments : {date && format(date, "PP")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {services?.map((service) => (
          <AppointmentService
            service={service}
            key={service._id}
            setTreatment={setTreatment}
          ></AppointmentService>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
