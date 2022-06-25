import Image from "next/image"
import Button from "../button";
import { featureIcon1, featureIcon2, featureIcon3, lightCurve, playIcon, technologyImg, videoThumbImg } from "../image";

export default function Technology() {
    return (
        <div className="bg-primary relative pt-24">
            <div className="absolute top-0 left-0 w-full"><Image src={lightCurve} /></div>
            <div className="px-4 sm:px-4 md:px-14 lg:px-14">
                <div className="flex w-full sm:w-full md:w-full lg:w-10/12 flex-wrap mx-auto">
                    <div className="w-full sm:w-full md:w-4/12 lg:w-4/12 mb-24 sm:mb-24 md:mb-12 lg:mb-12"><FeatureItem imageLink={featureIcon1} title="Comprehensive Care" /></div>
                    <div className="w-full sm:w-full md:w-4/12 lg:w-4/12 mb-24 sm:mb-24 md:mb-12 lg:mb-12"><FeatureItem imageLink={featureIcon2} title="Advanced Technology" /></div>
                    <div className="w-full sm:w-full md:w-4/12 lg:w-4/12 mb-24 sm:mb-24 md:mb-12 lg:mb-12"><FeatureItem imageLink={featureIcon3} title="Welcoming Staff" /></div>
                    <div className="w-full sm:w-full md:w-11/12 lg:w-11/12 mx-auto flex items-center justify-center relative -mb-[240px] sm:-mb-[240px] md:-mb-[330px] lg:-mb-[170px] xl:-mb-[170px] 2xl:-mb-[330px] mt-0 sm:mt-0 md:mt-5 lg:mt-5">
                        <div className="absolute z-20 cursor-pointer h-[134px] w-[134px] sm:h-[134px] sm:w-[134px] md:h-[170px] md:w-[170px] lg:h-[170px] lg:w-[170px]"><Image src={playIcon} /></div>
                        <div className="image-wrapper hidden sm:hidden md:block md:ml-14 lg:ml-0 xl:ml-0 2xl:ml-0 w-full sm:w-full md:w-auto border-4 sm:border-4 md:border-8 lg:border-4 border-white shadow-2xl"><Image src={videoThumbImg} className=" !h-full" /></div>
                        <div className="image-wrapper block sm:block md:hidden lg:hidden img-technology-mobile w-[381px] h-[481px] sm:w-full md:w-auto border-4 sm:border-4 md:border-8 lg:border-4 border-white fill-current shadow-2xl"><Image src={videoThumbImg} objectFit="cover" /></div>
                    </div>
                </div>
            </div>
            <div className="md:ml-14 lg:ml-14 pt-80 sm:pt-80 md:pt-96 lg:pt-96 md:pb-12 lg:pb-16 xl:pb-12 2xl:pb-0 bg-white">
                <div className="flex flex-wrap w-full sm:w-full md:w-11/12 lg:w-11/12 ml-auto">
                    <div className="w-full sm:w-full md:w-6/12 lg:w-5/12 flex items-center order-2 sm:order-2 md:order-1 lg:order-1">
                        <div className="p-4 sm:p-4 md:p-10 md:py-0 lg:p-8 lg:py-0 xl:p-18 2xl:p-28 3xl:p-12 4xl:p-28">
                            <h4 className="text-3xl">MODERN TECHNOLOGY</h4>
                            <p className="justify leading-9 my-8 text-justify sm:text-justify md:text-left lg:text-left">Award-winning cosmetic dentist Dr. Ivan Ho uses the latest technology and innovative cosmetic dental procedures to transform your smile rapidly, comfortably and beautifully.

                            </p>
                            <Button customClass="w-full sm:w-full md:w-auto">Learn more</Button>
                        </div>
                    </div>
                    <div className="w-full sm:w-full md:w-6/12 lg:w-7/12 order-1 sm:order-1 md:order-2 lg:order-2">
                        <div className="-mb-2 img-full px-4 sm:px-4 md:px-0 lg:px-0"><Image src={technologyImg} width={961} height={800} className="object-cover" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FeatureItem({ imageLink, title }) {
    return (
        <>

            <div className="relative flex items-center justify-center">
                <div className="absolute scale-110 w-60 h-60 sm:w-60 sm:h-60 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-60 xl:h-60 bg-white opacity-40 rounded-full  top-0"></div>
                <div className="flex w-60 h-60 sm:w-60 sm:h-60 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-60 xl:h-60 rounded-full justify-center bg-white mb-5 mx-auto relative z-20">
                    <Image src={imageLink} className="m-auto" width={110} height={240} />
                </div>
            </div>
            <p className="text-center  mt-4 uppercase text-white text-2xl">{title}</p>
        </>
    );
}
