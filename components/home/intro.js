import Image from "next/image"
import Link from "next/link"
import Button from "../button";
import { partnerImg1, partnerImg2, partnerImg3, partnerImg4, partnerImg5, partnerImg6, partnerImg7, introBgImage, introImg1, introImg2, introDoctor } from "../image";
export default function Intro() {
    return (
        <div className="py-16 sm:py-16 md:py-28 lg:py-28 relative overflow-hidden">
            <div className="absolute bottom-0 sm:bottom-0 left-0 sm:left-0 md:left-auto sm:left-0 md:top-0 lg:top-0 right-0 w-full sm:w-full md:w-5/12 lg:w-5/12"><Image src={introBgImage} layout="fill" objectFit="cover" /></div>
            <div className="flex flex-wrap w-full sm:w-full md:w-10/12 lg:w-10/12 mx-auto relative">
                <div className="w-full sm:w-full md:w-full lg:w-9/12 mt-[2px]">
                    <h4 className="uppercase font-buljirya text-dark-500 text-lg md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl text-center tracking-widest sm:tracking-widest md:tracking-xl lg:tracking-xl mt-7 mb-10 mix-blend-plus-lighter">DR. Ivan Ho, Dds</h4>
                    <div className="flex flex-wrap mt-11">
                        <div className="w-full sm:w-full md:w-6/12 lg:w-6/12">
                            <div className="px-4 sm:px-4 md:px-4 md:pl-0 lg:px-6 text-justify flex flex-col justify-between h-full">
                                <h4 className="mb-4 text-3xl text-center sm:text-center md:text-left md:text-3xl lg:text-3xl">YOUR PREMIER DENTIST IN LAGUNA HILLS, CA</h4>
                                <p className="leading-9 mb-7">Dr. Ivan Ho is a Board Certified cosmetic dentist in Orange County. He graduated with honors from UCLA and completed his dental degree at the University of Southern California School of Dentistry. Since opening his practice in 1990, more than 10,000 patients have come through his doors to take advantage of his award-winning cosmetic dentistry in Laguna Hills, California. He lectures internationally in both cosmetic and implant dentistry and has achieved mastership status from the International Congress of Oral Implantology. He is the chairman of the Orange County Dental Society emergency care panel and is a member of ten different professional societies.</p>
                                <Link href="#"><a className="bg-primary uppercase text-center text-white w-full px-8 h-14 flex items-center justify-center text-2xl sm:text-2xl md:text-xl lg:text-lg xl:text-2xl 2xl:text-2xl">Meet DR. Ivan Ho, Dds</a></Link>
                            </div>
                        </div>
                        <div className="w-full sm:w-full md:w-6/12 md:w-6/12">
                            <div className="relative px-4 sm:px-4 md:pr-12 lg:pr-12 mb-12 sm:mb-12 md:mb-0 lg:mb-0 mt-12 sm:mt-12 md:mt-0 lg:mt-0">
                                <div className="absolute hidden sm:hidden md:hidden lg:block h-1 w-36 bg-primary top-1/4 sm:top-1/4 md:top-1/4 lg:top-1/2 xl:top-1/2 2xl:top-1/4 -left-2 sm:-left-2 md:-left-2 lg:-left-16 lg:-left-16 2xl:-left-2 xl z-10"></div>
                                <div className="absolute h-full w-9/12 border border-dark-500 top-6 sm:top-6 md:-top-6 lg:-top-6 right-[7px] sm:right-[7px] md:right-5 lg:right-5 mix-blend-plus-lighter"></div>
                                <div className="text-right -mb-2"><Image src={introDoctor} /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-full md:w-full lg:w-3/12 mt-0 sm:mt-0 md:mt-8 lg:mt-0">
                    <div className="flex flex-col sm:flex-col md:flex-row md:justify-between lg:flex-col px-4 sm:px-4 md:px-0 lg:px-0">
                        <div className="first:mb-4 md:w-[48%] lg:w-full"><Image src={introImg1} className="aspect-4/3" /></div>
                        <div className="first:mb-4 md:w-[48%] lg:w-full"><Image src={introImg2} className="aspect-4/3" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
