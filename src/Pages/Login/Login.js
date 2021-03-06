import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import useToken from "../../hooks/useToken";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user1, loading1, error1] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [token] = useToken(user || user1);
  
  useEffect(() => {
   if (token) {
     navigate(from, { replace: true });
   }
},[token ,from,navigate])

  
 
  

  let SignInError;
  if (loading || loading1) {
    return <Loading></Loading>;
  }
  if (error || error1) {
    SignInError = <p className="text-red-500 mb-2 mt-2">{error?.message||error1?.message }</p>
}


  // const handleFromSubmit = event => {
  //   event.preventDefault();
  // }
  const onSubmit = (data) => {
  
    signInWithEmailAndPassword(data.email, data.password);

  };
  return (
    <div className="card w-1/2   shadow-xl mt-28 mx-auto ">
      <div className=" text-black-500  p-10">
        <h2 className="text-center text-bold text-2xl mb-2 mt-2">Login</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col justify-center 
         "
        >
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
          <input className="btn w-full max-w-xs mb-5" type="submit" value="Login" />
        </form>

        <div>
          <p className="">
            New to Doctors Portal ?
            <Link to="/signup" className="text-primary ml-2">
              Create new account
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

export default Login;
