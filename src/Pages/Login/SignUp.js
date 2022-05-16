import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user1, loading1, error1] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, upDateError] = useUpdateProfile(auth);

  const [token] = useToken(user || user1);

const navigate=useNavigate()


  let SignInError;
  if (loading || loading1 || updating) {
    return <Loading></Loading>;
  }


  if (error || error1 || upDateError) {
    SignInError = (
      <p className="text-red-500 mb-2 mt-2">
        {error?.message || error1?.message || upDateError?.message}
      </p>
    );
  }

  if (token) {
   
       navigate("/appointment");
  }

  // const handleFromSubmit = event => {
  //   event.preventDefault();
  // }
  const onSubmit = async (data) => {
 
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    // console.log("update dane");
 
  };
  return (
    <div className="card w-1/2   shadow-xl mt-28 mx-auto ">
      <div className=" text-black-500  p-10">
        <h2 className="text-center text-bold text-2xl mb-2 mt-2">Sign Up</h2>
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your Password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is Required",
                },
                minLength: {
                  value: 6,
                  message: "Must be 6 characters or longer",
                },
              })}
            />
            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>
          {SignInError}
          <input
            className="btn w-full max-w-xs mb-5"
            type="submit"
            value="Sign Up"
          />
        </form>

        <div>
          <p className="">
            Already have an account ?
            <Link to="/login" className="text-primary ml-2">
              Please login
            </Link>
          </p>
        </div>
        <div className="divider ">OR</div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-outline btn-accent w-full "
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;

