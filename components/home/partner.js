import Image from "next/image";
import { partnerImg1, partnerImg2, partnerImg3, partnerImg4, partnerImg5, partnerImg6, partnerImg7 } from "../image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
export default function Partner() {
    return (
        <>
            <div className="bg-light py-16 px-4 sm:px-4 md:px-14 lg:px-14">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 7,
                            spaceBetween: 20,
                        },
                        1400: {
                            slidesPerView: 7,
                            spaceBetween: 20,
                        },
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide><Image src={partnerImg1} /></SwiperSlide>
                    <SwiperSlide><Image src={partnerImg2} /></SwiperSlide>
                    <SwiperSlide><Image src={partnerImg3} /></SwiperSlide>
                    <SwiperSlide><Image src={partnerImg4} /></SwiperSlide>
                    <SwiperSlide><Image src={partnerImg5} /></SwiperSlide>
                    <SwiperSlide><Image src={partnerImg6} /></SwiperSlide>
                    <SwiperSlide><Image src={partnerImg7} /></SwiperSlide>
                </Swiper>
                {/* <div className="flex-0-scroll mr-7 sm:mr-7 md:mr-7 lg:mr-7 xl:mr-0 2xl:mr-0 last:mr-0 last:sm:mr-0 last:md:mr-0"><Image src={partnerImg1} /></div>
                <div className="flex-0-scroll mr-7 sm:mr-7 md:mr-7 lg:mr-7 xl:mr-0 2xl:mr-0 last:mr-0 last:sm:mr-0 last:md:mr-0"><Image src={partnerImg2} /></div>
                <div className="flex-0-scroll mr-7 sm:mr-7 md:mr-7 lg:mr-7 xl:mr-0 2xl:mr-0 last:mr-0 last:sm:mr-0 last:md:mr-0"><Image src={partnerImg3} /></div>
                <div className="flex-0-scroll mr-7 sm:mr-7 md:mr-7 lg:mr-7 xl:mr-0 2xl:mr-0 last:mr-0 last:sm:mr-0 last:md:mr-0"><Image src={partnerImg4} /></div>
                <div className="flex-0-scroll mr-7 sm:mr-7 md:mr-7 lg:mr-7 xl:mr-0 2xl:mr-0 last:mr-0 last:sm:mr-0 last:md:mr-0"><Image src={partnerImg5} /></div>
                <div className="flex-0-scroll mr-7 sm:mr-7 md:mr-7 lg:mr-7 xl:mr-0 2xl:mr-0 last:mr-0 last:sm:mr-0 last:md:mr-0"><Image src={partnerImg6} /></div>
                <div className="flex-0-scroll mr-7 sm:mr-7 md:mr-7 lg:mr-7 xl:mr-0 2xl:mr-0 last:mr-0 last:sm:mr-0 last:md:mr-0"><Image src={partnerImg7} /></div> */}
            </div>

        </>
    );
}
