import { useEffect, useState } from "react";


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
            <h1 className="text-5xl font-bold text-center mb-8">Select Your House</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {houses.map((house) => {
                    return <>
                        <div className="relative flex flex-col items-center justify-center">
                            <img className="w-full" src={house.img} alt="" />
                            <h3 className="text-5xl absolute text-center text-white font-bold">{house.name}</h3>
                        </div>
                    </>
                })}
            </div>
        </div>
    </>
}

export default Home;