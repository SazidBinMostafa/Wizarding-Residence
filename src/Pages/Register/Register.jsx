import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

function Register() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const { createUser } = useContext(AuthContext)

    const handleEmail = (e) => {
        const emailInput = e.target.value;
        setEmail(emailInput)
    }

    const handlePassword = (e) => {
        const passwordInput = e.target.value;
        setPassword(passwordInput)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        createUser(email, password)
        .then(res => console.log(res.user))
        .catch(error => console.log(error))
    }


    return <>
        <h1 className="font-bold text-5xl text-center mb-8">Register</h1>
        <form onSubmit={handleSubmit} className="card-body md:w-96 mx-auto bg-gray-300 rounded-3xl mb-14">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input onChange={handleEmail} type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input onChange={handlePassword} type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-neutral">Login</button>
            </div>
            <p>Already have an account? <Link className="text-blue-800" to="/login">Login here!</Link></p>
            <hr className="my-5" />
            <div className="flex flex-col gap-5">
                <button className="btn btn-outline w-full"><FaGoogle />Register with Google</button>
                <button className="btn btn-outline w-full"><FaFacebook />Register with Facebook</button>
            </div>
        </form>
    </>
}

export default Register;