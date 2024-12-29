import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { signUpUser } from "../utils/authFunctions";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/userDetails";

function RegisterPage() {
  const [pwd, setPwd] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const nav = useNavigate();
  const { setUserDetails, setToken } = useContext(userContext);

  async function onSubmit(data) {
    try {
      const userData = await signUpUser(data);
      setUserDetails(userData.user);
      localStorage.setItem("authToken", userData.token);
      setToken(userData.token);
      nav("/");
    } catch (error) {
      console.log(error);
    }
    reset();
  }

  return (
    <div className="flex justify-center items-center h-[calc(80vh-40px)]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-100 mx-auto rounded-lg p-6 lg:w-[45%] flex flex-col gap-4 justify-center items-center drop-shadow-md"
      >
        <h1 className="lg:text-2xl font-semibold">Create your Account</h1>
        <p className="text:xs lg:text-lg text-gray-600">
          Welcome! Please fill in the details to get started.
        </p>
        <hr />
        <input
          {...register("fname")}
          placeholder="First Name"
          className="bg-gray-200 p-2 rounded-lg"
        />
        <input
          {...register("lname")}
          placeholder="Last name"
          className="bg-gray-200 p-2 rounded-lg"
        />
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="bg-gray-200 p-2 rounded-lg"
        />
        <label className="bg-gray-200 p-2 rounded-lg">
          <input
            {...register("password")}
            type={pwd ? "password" : "text"}
            placeholder="password"
            className="bg-gray-200 outline-none"
          />
          <FontAwesomeIcon
            icon={faEye}
            onClick={() => setPwd(!pwd)}
            className="cursor:pointer"
          />
        </label>
        <button
          type="submit"
          className="w-fit bg-black text-white p-2 rounded-lg"
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
