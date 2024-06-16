import { Swiper, SwiperSlide } from 'swiper/react';
import Castle from "../Castle/Castle";
import "./Home.css"
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { useEffect } from 'react';


function Home() {

    useEffect(()=>{
        document.title = "Wizarding Castle";
    },[])

    return <>
        <Swiper className='mb-20'
            modules={[Autoplay]}
            slidesPerView={1}
            autoplay

        >
            <SwiperSlide><img src="/Banner.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/Banner2.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/Banner3.png" alt="" /></SwiperSlide>
        </Swiper>
        <Castle></Castle>
    </>
}

export default Home;