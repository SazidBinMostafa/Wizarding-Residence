import { useContext, useEffect, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

function Login() {
    const {user} = useContext(AuthContext);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const previousLocation = location.state;

    console.log(location)
    
    const { loginUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    useEffect(()=>{
        document.title = "Login - Wizarding Castle";
    },[])

    if(user){
        return <Navigate to='/'></Navigate>
    }


    const handleEmail = (e) => {
        const emailInput = e.target.value;
        setEmail(emailInput)
    }

    const handlePassword = (e) => {
        const passwordInput = e.target.value;
        setPassword(passwordInput)
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(previousLocation ? previousLocation : '/')
                setError(null)
            })
            .catch(err => setError(err.message))
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(() => {
                navigate(previousLocation ? previousLocation : '/')
                setError(null)
            })
            .catch(err => setError(err.message))
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        loginUser(email, password)
            .then(() => {
                navigate(previousLocation ? previousLocation : '/')
                e.target.reset();
                setError(null)
            })
            .catch(error => {
                if (error.message === "Firebase: Error (auth/invalid-credential).") {
                    setError("Invalid Email or Password")
                }
                else {
                    setError(error.message)
                }
            })


    }


    return <>
        <h1 className="font-bold text-5xl text-center mb-8">Login</h1>
        <div className=" md:w-96 mx-auto bg-gray-300 rounded-3xl mb-14">
            <form onSubmit={handleSubmit} className="card-body">
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

                    {error && <p className="text-red-500">{error}</p>}
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-neutral">Login</button>
                </div>
                <p>New here? <Link state={previousLocation} className="text-blue-800" to="/sign-up">Sign up now!</Link></p>
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

export default Login;