import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../../Firebase/Firebase.config";


function Settings() {

    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName)
    const [email, setEmail] = useState(user?.email)
    const [photoURL, setPhotoURL] = useState(user?.photoURL)

    useEffect(() => {
        document.title = "Settings - Wizarding Castle";
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        const updatedName = e.target.Name.value;
        const updatedPhotoURL = e.target.PhotoURL.value;

        console.log(updatedName, updatedPhotoURL)

        if (updatedName !== "") {
            updateProfile(auth.currentUser, {
                displayName: updatedName,
            }).then(() => {
                setName(updatedName)
            }).catch((error) => {
                console.log(error)
            });
        }

        else if (updatedPhotoURL !== "") {
            updateProfile(auth.currentUser, {
                photoURL: updatedPhotoURL,
            }).then(() => {
                setPhotoURL(updatedPhotoURL)
            }).catch((error) => {
                console.log(error)
            });
        }

    }

    return <>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-8">
                <img src={photoURL} className="w-96 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <div className="badge badge-lg badge-outline mt-3 font-semibold">{email}</div>
                    <hr className="my-5" />
                    <h3 className="text-xl font-semibold mb-3">Update Profile</h3>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <input className="border p-3 w-96" type="text" name="Name" placeholder="Name" />
                        <input className="border p-3 w-96" type="text" name="PhotoURL" placeholder="Photo URL" />
                        <button className="btn btn-outline">Update Profile</button>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default Settings;