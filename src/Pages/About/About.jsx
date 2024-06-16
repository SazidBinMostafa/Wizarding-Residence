import { useEffect } from 'react';
import './About.css'

function About() {

    useEffect(()=>{
        document.title = "About - Wizarding Castle";
    },[])
    
    return <>
        <div id="About" className="py-14">
            <div className="text-white top-5 text-center w-full px-5 md:px-14 lg:px-32">
                <h1 className="text-5xl font-bold mb-8">About Us</h1>
                <p>
                    Welcome to Wizarding Castle, your one-stop portal to finding the perfect magical abode!  Here, you will discover extraordinary castles brimming with history, charm, and unique features unlike any other.

                    Whether you are a seasoned witch or wizard seeking a prestigious residence, or a curious newcomer to the magical world, we have something for everyone. Explore houses that resonate with your values and personality, from the courageous Gryffindor with its emphasis on bravery to the wise Ravenclaw, a haven for scholars and wit. Perhaps the hardworking and loyal Hufflepuff calls to you, or maybe the ambitious and cunning Slytherin stirs your spirit.

                    Our immersive listings provide a glimpse into each house's character, detailing their history, prized facilities, and student types who thrive within their walls.  Imagine evenings spent relaxing by a crackling fireplace in the Gryffindor common room, or delving into ancient texts within the hidden alcoves of Ravenclaw Tower.

                    So, step inside and embark on a magical journey to find your dream home at Wizarding Residences. We cannot wait to help you find where you truly belong!
                </p>
            </div>
        </div>
    </>
}

export default About