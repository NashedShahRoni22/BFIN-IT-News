import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const hostname = "username"
    const hostpassword = "123456"
    const navigate = useNavigate()
    const handleLogin =(e)=>{
        e.preventDefault();
        const username = e.target.name.value;
        const userpassword = e.target.password.value;
        if(hostname === username && hostpassword === userpassword ){
            navigate("/home");
        }
        else{
            alert("Username or Password doesn't match!")
        }
    }
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <form onSubmit={handleLogin} className="flex flex-col gap-3 shadow-xl p-6 container mx-auto w-1/2 lg:w-1/3">
        <h2 className="text-xl font-bold text-blue-500">Login to continue</h2>
        <label className="font-semibold">Enter Username</label>
        <input placeholder="Enter Username" type="text" name="name" className="py-2 px-4 w-full border-2 rounded-md border-blue-400 focus:outline-blue-600"/>
        <label className="font-semibold">Enter Password</label>
        <input placeholder="Enter Password" type="password" name="password" className="py-2 px-4 w-full border-2 rounded-md border-blue-400 focus:outline-blue-600"/>
        <button type="submit" className="px-4 py-2 bg-blue-500 font-semibold text-white rounded-md">Login</button>
      </form>
    </div>
  );
};

export default Login;
