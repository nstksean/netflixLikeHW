import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

import "./Top10Carousl.css";
import { api_recomm, Top10imgs } from "../../mockApi/mockApi"



export default function Top10Carousl(api_recomm) {


    const title = 'Top 10 in Thailand'
    return (
        <div className="top10Container ">
            <div className="title d-flex"><h3>{title}</h3></div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                slidesPerGroup={4}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {Array.from(Top10imgs).map((img) =>
                    <SwiperSlide>
                        <div className="imgContainer">
                            <img src={img} />
                        </div>
                        <div className="textbox">{title}</div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
}
