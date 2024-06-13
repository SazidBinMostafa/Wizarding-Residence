import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Carousel from "../../Components/Carousel";


function HouseInfo() {

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

    console.log(houses)
    console.log(house?.images.drawingRooms)

    return <>
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
                <div className="flex flex-wrap gap-5 items-center justify-center md:justify-start">
                    <Link to={`/house/details/${id}`}><button className="btn btn-outline px-8">View Property</button></Link>
                </div>
            </div>
        </div>
    </>
}

export default HouseInfo;