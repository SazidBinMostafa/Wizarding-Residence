import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { createUser, updateName } = useContext(AuthContext);

    const handleName = (e) => {
        const nameInput = e.target.value;
        setName(nameInput)
    }

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
            .then(() => {
                navigate('/')
                e.target.reset();
                setError(null)
                updateName(name)
                .then(res=> console.log(res))
                .catch(error=> console.log(error))
            })
            .catch(error => {
                if(error.message === "Firebase: Error (auth/email-already-in-use)."){
                    setError("Ooops! Email already in use.")
                }
                else if(error.message === "Firebase: Password should be at least 6 characters (auth/weak-password)."){
                    setError("Password should be at least 6 characters.")
                }
                else{
                    setError(error.message)
                }
            })
    }


    return <>
        <h1 className="font-bold text-5xl text-center mb-8">Sign Up</h1>
        <form onSubmit={handleSubmit} className="card-body md:w-96 mx-auto bg-gray-300 rounded-3xl mb-14">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input onChange={handleName} type="text" placeholder="Your Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input onChange={handleEmail} type="email" placeholder="Your Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input onChange={handlePassword} type="password" placeholder="Your Password" className="input input-bordered" required />
                {error && <p className="text-red-500 mt-3">{error}</p>}
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-neutral">Sign Up</button>
            </div>
            <p>Already have an account? <Link className="text-blue-800" to="/login">Login here!</Link></p>
            <hr className="my-5" />
            <div className="flex flex-col gap-5">
                <button className="btn btn-outline w-full"><FaGoogle />Continue with Google</button>
                <button className="btn btn-outline w-full"><FaFacebook />Continue with Facebook</button>
            </div>
        </form>
    </>
}

export default SignUp;