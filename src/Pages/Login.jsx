import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <form
        className="shadow-2xl  space-y-3  shadow-black w-[500px] 
         m-auto  mt-20 rounded-2xl p-5 pl-8 flex flex-col"
      >
        <label htmlFor="Email">Email</label>
        <input
          type="Email"
          className="  p-2 rounded-2xl  outline-none  border-2 border-black   w-[400px]"
          placeholder="Enter Your Email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="  p-2 rounded-2xl outline-none border-black border-2   w-[400px]"
          id=""
          placeholder="Enter Your Password"
        />
        <div className="space-y-4 pl-[20px]">
          <button className="bg-blue-400 hover:bg-blue-600  text-white p-2 rounded-2xl   w-[350px] mt-[20px]">
            Login
          </button>
          <button
            onClick={() => {
              loginWithRedirect();
            }}
            className="border p-2 rounded-2xl   w-[350px] flex justify-center gap-4"
          >
            <FcGoogle size={20} className="m-0.5" />
            Login With Google
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;