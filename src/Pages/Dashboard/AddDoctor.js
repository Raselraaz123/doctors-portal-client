import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {

   const {
     register,
     formState: { errors },
     handleSubmit,
     reset
  } = useForm();

  const { data:services,isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );
    
/**
 * 3 ways to store images
 * 1. Third party storage // free open public storage is ok for practice project.
 * 2.you own storage in you own server(file system)
 * 3. Database:Mongodb
 * 
 * Yup:to valiDate file:search:Yup file validation for react hook form
 */

  const imageStorageKey = "8c58efe7ccb0b1a32683071136618b7f";
  

  const onSubmit = async (data) => {
    const image = data.Image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: 'POST',
      body:formData
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          const img = result.data.url
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img:img
          }
          // send to your database
          fetch("http://localhost:5000/doctor", {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization:`Bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify(doctor)
          })
          .then(res => res.json())
      .then(inserted => {
        if (inserted.insertedId) {
          toast.success('Doctor added successfully');
          reset();
        }
        else {
          toast.error('Failed to add the doctor');
        }
    })
        }

    })

    // console.log("data", data);
  };
  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div className="shadow-2xl flex flex-col mx-auto w-1/2 mt-5 rounded-2xl items-center">
      <h2 className="text-2xl"> Add a new Doctor</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col justify-center 
         "
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: "Email is Required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid Email",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>

          <select
            {...register("specialty")}
            class="select input-bordered w-full max-w-xs"
          >
            {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            className="input  w-full max-w-xs"
            {...register("Image", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn w-full max-w-xs mt-5 mb-5"
          type="submit"
          value="Add Doctor"
        />
      </form>
    </div>
  );
};

export default AddDoctor;