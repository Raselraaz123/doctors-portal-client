import React from 'react';


const AppointmentService = ({ service }) => {
  return (
    <div class="card lg:max-w-lg shadow-xl ">
      <div class="card-body items-center text-center">
        <h2 class="card-title text-secondary">{service.name}</h2>
        <p>
          {service.slots.length > 0 ? (
            <span>{service.slots[0]} </span>
          ) : (
            <span className="text-red-500">Try another date</span>
          )}
        </p>
        <p>
          {service.slots.length} {service.slots.length > 1 ? "spaces" : "space"}
          available
        </p>
        <div class="card-actions justify-end">
          <button
            disabled={service.slots.length === 0}
            class="btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase text-white"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentService;

   