import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";


function Profile() {

    const { user } = useContext(AuthContext);

    useEffect(() => {
        document.title = "Profile - Wizarding Castle";
    }, [])

    return <>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-8">
                <img src={user?.photoURL} className="w-96 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{user?.displayName}</h1>
                    <div className="badge badge-lg badge-outline mt-3 font-semibold">{user?.email}</div>
                    <div className="mt-5">
                        <Link to='/settings'><button className="btn btn-outline">Edit Profile</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Profile;