import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../Components/Carousel";


function HouseDetails() {

    const [house, setHouse] = useState(null);
    const [houses, setHouses] = useState([])

    const { id } = useParams();

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
            <div role="tablist" className="tabs tabs-bordered">
                <input type="radio" name="my_tabs_1" role="tab" className="tab text-nowrap" aria-label="Drawing Room" checked />
                <div role="tabpanel" className="tab-content">
                    {house && <Carousel images={house.images.drawingRooms}></Carousel>}
                </div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Bedroom" />
                <div role="tabpanel" className="tab-content">
                    {house && <Carousel images={house.images.bedrooms}></Carousel>}
                </div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Bathroom" />
                <div role="tabpanel" className="tab-content">
                    {house && <Carousel images={house.images.bathrooms}></Carousel>}
                </div>
            </div>
            <div className="text-center md:text-left">
                <h1 className="text-5xl font-bold">{house?.name}</h1>
                <p className="font-semibold mt-5">About:</p>
                <hr className="my-2" />
                <p>{house?.about}</p>
                <hr className="my-5" />
                <div className="space-x-1 space-y-1">
                    <div className="badge badge-lg badge-outline">Drawing Room: {house?.roomsCount.drawingRooms}</div>
                    <div className="badge badge-lg badge-primary badge-outline">Bedroom: {house?.roomsCount.bedrooms}</div>
                    <div className="badge badge-lg badge-accent badge-outline">Bathroom: {house?.roomsCount.bathrooms}</div>
                </div>
                <hr className="my-5" />
                <h5>Area: {house?.area} Sq. feet</h5>
                <hr className="my-5" />
                <h5 className="text-xl">Status: For {house?.status}</h5>
                <hr className="my-5" />
                <div className="flex gap-5 items-center">
                    <h3 className="text-3xl font-semibold">Price: {house?.price}$</h3>
                    <button className="btn btn-outline px-8">Rent</button>
                </div>
            </div>
        </div>
    </>
}

export default HouseDetails;