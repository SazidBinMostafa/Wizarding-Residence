import { useEffect, useState } from "react";
import "./Home.css"


function Home() {

    const [houses, setHouses] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch('HousesData.json')
            .then(res => res.json())
            .then(data => setHouses(data))
        setLoading(false)
    }, [])

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    return <>
        <div>
            <img src="/Banner.png" alt="" />
        </div>
        <div className="my-14">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-14">Select Your House</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 md:mx-8 lg:mx-32">
                {houses.map((house) => {
                    return <>
                        <div id="house" className="relative flex flex-col items-center justify-center hover:cursor-pointer  rounded-3xl">
                            <img className="w-full" src={house.img} alt="" />
                            <h3 className="text-3xl md:text-4xl lg:text-5xl absolute text-center text-white font-bold">{house.name}</h3>
                        </div>
                    </>
                })}
            </div>
        </div>
        
    </>
}

export default Home;