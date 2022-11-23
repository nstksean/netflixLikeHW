// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import './CategoryMovieSwiper.css'

import catephoto from '../../asset/placeholder/HD-1st.png'

export default function CategoryMovieCarousl(
    movieTitle,
    apiData
) {
    console.log(movieTitle)

    return (
        <div className="CategoryMovieCarousl mb-4">
            <div className="title d-flex flex-row justify-content-between">
                <h3 className="d-flex justify-content-start">
                    {movieTitle.movieTitle ? `${movieTitle.movieTitle}` : 'title'}
                </h3>
                <h4 className="d-flex justify-content-end">{"ดูทั้งหมด"}</h4>
            </div>
            <Swiper
                slidesPerView={6}
                spaceBetween={10}
                slidesPerGroup={6}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="movieSwiper"
            >
                <SwiperSlide>
                    <div className="imgContainer">
                        <img src={"https://via.placeholder.com/200X300.png"} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="imgContainer">
                        <img src={"https://via.placeholder.com/200X300.png"} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="imgContainer">
                        <img src={"https://via.placeholder.com/200X300.png"} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="imgContainer">
                        <img src={"https://via.placeholder.com/200X300.png"} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="imgContainer">
                        <img src={"https://via.placeholder.com/200X300.png"} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="imgContainer">
                        <img src={"https://via.placeholder.com/200X300.png"} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="imgContainer">
                        <img src={"https://via.placeholder.com/200X300.png"} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="imgContainer">
                        <img src={"https://via.placeholder.com/200X300.png"} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="imgContainer">
                        <img src={"https://via.placeholder.com/200X300.png"} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="imgContainer">
                        <img src={"https://via.placeholder.com/200X300.png"} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="imgContainer">
                        <img src={"https://via.placeholder.com/200X300.png"} />
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
}
