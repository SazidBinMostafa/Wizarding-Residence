import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../Components/Carousel";


function CastleDetails() {

    const [house, setHouse] = useState(null);
    const [houses, setHouses] = useState([])

    const { id } = useParams();

    const [activeTab, setActiveTab] = useState(1);

    useEffect(() => {
        fetch('/HousesDetails.json')
            .then(res => res.json())
            .then(data => setHouses(data))
    }, [])

    useEffect(() => {
        const currentHouse = houses.find(h => h.id == id)
        setHouse(currentHouse)
    }, [houses])

    useEffect(()=>{
        if(house){
            document.title = `${house.name} - Wizarding Castle`
        }
    },[house])

    return <>

        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <img
                    src="/Owl.png"
                    alt="Owl delivering message"
                    className="w-96 border mx-auto"
                />
                <h3 className="font-bold text-xl text-center mt-5">Your request has been submitted.</h3>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
        <div className="flex flex-col md:flex-row gap-14 mx-5 mb-14 lg:mx-32">
            <div className="flex flex-col items-center">
                <div className="flex mb-5">
                    <button onClick={() => setActiveTab(1)} className={activeTab === 1 ? "border-b-2 border-black px-3 text-nowrap" : "border-b-2 px-3 text-nowrap"} >Drawing Room</button>
                    <button onClick={() => setActiveTab(2)} className={activeTab === 2 ? "border-b-2 border-black px-3" : "border-b-2 px-3"} >Bedroom</button>
                    <button onClick={() => setActiveTab(3)} className={activeTab === 3 ? "border-b-2 border-black px-3" : "border-b-2 px-3"} >Bathroom</button>
                </div>
                <div>
                    {house && activeTab === 1 ? <Carousel images={house.images.drawingRooms}></Carousel> : <></>}
                    {house && activeTab === 2 ? <Carousel images={house.images.bedrooms}></Carousel> : <></>}
                    {house && activeTab === 3 ? <Carousel images={house.images.bathrooms}></Carousel> : <></>}
                </div>
            </div>
            <div className="text-center md:text-left">
                <h1 className="text-5xl font-bold">{house?.name}</h1>
                <p className="font-semibold mt-5">About:</p>
                <hr className="my-2" />
                <p>{house?.about}</p>
                <hr className="my-3" />
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-5">
                    <div className="badge font-semibold badge-lg badge-accent badge-outline">Segment Name: {house?.segmentName}</div>
                    <div className="badge font-semibold badge-lg badge-outline">Area: {house?.area} Sq. feet</div>
                    <div className="badge font-semibold badge-lg badge-success badge-outline">Status: For {house?.status}</div>
                </div>
                <hr className="my-3" />
                <div className="flex gap-5">
                    <div className="badge font-semibold h-full badge-lg badge-outline">Location: {house?.location}</div>
                </div>
                <hr className="my-3" />
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-5">
                    <span className="font-bold">Facilities:</span>
                    <div className="badge font-semibold badge-lg badge-info badge-outline">{house?.facilities[0]}</div>
                    <div className="badge font-semibold badge-lg badge-warning badge-outline">{house?.facilities[1]}</div>
                    <div className="badge font-semibold badge-lg badge-success badge-outline">{house?.facilities[2]}</div>
                </div>
                <hr className="my-3" />
                <div className="flex flex-wrap gap-5 items-center justify-center md:justify-start">
                    <h3 className="text-3xl font-semibold">Rent: {house?.price}$/month</h3>
                    <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn btn-outline px-8">Rent</button>
                </div>
            </div>
        </div>
        <div className="mx-5 md:mx-14 lg:mx-32 mb-14">
            <h3 className="text-3xl font-bold mb-5">Additional Info:</h3>
            <table className="border w-full font-semibold">
                <tr>
                    <th></th>
                    <th></th>
                </tr>
                <tr className="mb-3 border-b">
                    <td className="px-5">Purpose:</td>
                    <td className="py-5">{house?.propertyDetails.purpose}</td>
                </tr>
                <tr className="mb-3 border-b">
                    <td className="px-5">About Residents:</td>
                    <td className="py-5">{house?.propertyDetails.residents.description}</td>
                </tr>
                <tr className="mb-3 border-b">
                    <td className="px-5 lg:text-nowrap">Residents Characteristics:</td>
                    <td className="py-5 flex flex-wrap gap-3">
                        {house?.propertyDetails.residents.characteristics.map((x, index) => <div className="badge font-semibold badge-lg badge-accent badge-outline" key={index}>{x}</div>)}
                    </td>
                </tr>
                <tr className="mb-3 border-b">
                    <td className="px-5">Chairman:</td>
                    <td className="py-5">{house?.propertyDetails.chairman}</td>
                </tr>
                <tr className="mb-3 border-b">
                    <td className="px-5">History:</td>
                    <td className="py-5">{house?.propertyDetails.history}</td>
                </tr>
            </table>
        </div>
    </>
}

export default CastleDetails;