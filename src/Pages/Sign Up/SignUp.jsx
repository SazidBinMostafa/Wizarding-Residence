import { useContext, useEffect, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

function SignUp() {
    const {user} = useContext(AuthContext);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const previousLocation = location.state;
    const { createUser, updateName, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    console.log(location)

    useEffect(()=>{
        document.title = "Sign Up - Wizarding Castle";
    },[])

    if(user){
        return <Navigate to='/'></Navigate>
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => navigate(previousLocation ? previousLocation : '/'))
            .catch(error => console.log(error))
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(() => navigate(previousLocation ? previousLocation : '/'))
            .catch(error => console.log(error))
    }

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
                navigate(previousLocation ? previousLocation : '/')
                e.target.reset();
                setError(null)
                updateName(name)
                    .then(res => console.log(res))
                    .catch(error => console.log(error))
            })
            .catch(error => {
                if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                    setError("Ooops! Email already in use.")
                }
                else if (error.message === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
                    setError("Password should be at least 6 characters.")
                }
                else {
                    setError(error.message)
                }
            })
    }


    return <>
        <h1 className="font-bold text-5xl text-center mb-8">Sign Up</h1>
        <div className=" md:w-96 mx-auto bg-gray-300 rounded-3xl mb-14">
            <form onSubmit={handleSubmit} className="card-body">
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
            </form>
            <div className="flex items-center">
                <hr className="w-full" /><span className="mx-5">or</span> <hr className="w-full" />
            </div>
            <div className="flex flex-col gap-5 card-body">
                <button onClick={handleGoogleSignIn} className="btn btn-outline w-full"><FaGoogle />Continue with Google</button>
                <button onClick={handleGithubSignIn} className="btn btn-outline w-full"><FaGithub />Continue with Github</button>
            </div>
        </div>
    </>
}

export default SignUp;