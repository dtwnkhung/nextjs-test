import Image from "next/image";
import { avatarFeedback, feedbackContainerBg, qouteFeedback } from "../image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function Feedback() {
    return (
        <div className="feedback bg-light sm:bg-light md:bg-light lg:bg-feedback-bg md:bg-light background py-16 background-f">
            <div className="flex flex-wrap">
                <div className="w-full sm:w-full md:w-3/12 lg:w-3/12 block sm:block md:hidden lg:block"></div>
                <div className="w-full sm:w-full md:w-12/12 lg:w-9/12">
                    <h4 className="text-primary text-3xl font-buljirya md:ml-40 lg:ml-20 xl:ml-20 2xl:ml-40 mb:-mb-8 md:mb-8 lg:-mb-8 xl:-mb-8 2xl:-mb-8 relative z-10 mt-4 text-center sm:text-center md:text-left lg:text-left px-3 sm:px-3 md:px-0 lg:px-0 mb-6 sm:mb-6 md:mb-0 lg:mb-12 xl:-mb-4 leading-loose sm:leading-loose md:leading-loose lg:leading-none">Our Patients Say It Best</h4>
                    <div className="relative flex justify-center items-center">
                        <div className="ml-8 sm:ml-8 md:ml-8 lg:ml-0 hidden sm:hidden md:block lg:block"><Image src={feedbackContainerBg} className="w-full" /></div>

                        <div className="relative sm:relative md:absolute lg:absolute w-full sm:w-full md:w-7/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12 px-3 sm:px-3 md:px-0 lg:px-0">
                            <Swiper
                                spaceBetween={15}
                                slidesPerView={1}
                                pagination={{
                                    dynamicBullets: true,
                                }}
                                modules={[Pagination]}
                            >
                                <SwiperSlide>
                                    <SliderItem
                                        slideImage={avatarFeedback}
                                        content="Friendly staff and always feel well taken care of. I have needed some additional work outside of routine cleanings this past year and never had an &quot;uncomfortable&quot; experience. Dr. Ho and his staff take good care of their patients"
                                        signature="Stacie"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <SliderItem
                                        slideImage={avatarFeedback}
                                        content="Friendly staff and always feel well taken care of. I have needed some additional work outside of routine cleanings this past year and never had an &quot;uncomfortable&quot; experience. Dr. Ho and his staff take good care of their patients"
                                        signature="Stacie"
                                    />
                                </SwiperSlide>
                            </Swiper>

                        </div>
                        <div className="absolute hidden sm:hidden md:block lg:block right-16 bottom-16"><Image src={qouteFeedback} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SliderItem({ slideImage, content, signature }) {
    return (
        <>
            <div className="text-center mt-3 pb-8">
                <div className="relative flex items-center justify-center">
                    <div className="scale-110 w-36 h-36 bg-white border border-4 border-primary rounded-full"></div>
                    <div className="absolute top-[2px]"><Image src={slideImage} className="rounded-full" height={140} width={140} /></div>
                </div>
                <p className="mt-7 mb-5">{content}</p>
                <p className="font-bellisya relative flex items-center justify-center">
                    <span className="border border-b border-dark-800 w-8"></span>
                    <span className="inline-block py-2 px-3 bg-light sm:bg-light md:bg-white lg:bg-white">{signature}</span>
                    <span className="border border-b border-dark-800 w-8"></span>
                </p>
            </div>
        </>
    );
}
