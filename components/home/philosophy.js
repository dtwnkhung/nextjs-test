import Image from "next/image"
import { partnerImg1, partnerImg2, partnerImg3, partnerImg4, partnerImg5, partnerImg6, partnerImg7, philosophyImg } from "../image";
import Button from './../button';
export default function Philosophy() {
    return (
        <div className="flex flex-wrap -mb-2 py-12 sm:py-12 md:py-0 lg:py-0">
            <div className="w-full sm:w-full md:w-6/12 lg:w-6/12 px-4 sm:px-4 md:px-0 lg:px-0 block sm:block md:flex lg:flex xl:flex 2xl:block items-center">
                <Image src={philosophyImg} className="w-full" />
            </div>
            <div className="w-full sm:w-full md:w-6/12 lg:w-6/12 flex items-center">
                <div className="p-4 sm:p-4 md:p-12 lg:p-16 xl:p-12 2xl:p-28">
                    <h4 className="text-3xl">OUR PHILOSOPHY</h4>
                    <p className="justify w-full sm:w-full md:w-full lg:w-full xl:w-11/12 2xl:w-9/12 leading-9 text-justify sm:text-justify md:text-left lg:text-left my-8">Our team at Pro Smiles OC is devoted to restoring and enhancing the natural beauty of your smile using conservative, state-of-the-art procedures that can result in beautiful, long lasting smiles! A standard of excellence in personalized dental care enables us to provide the quality dental services our patients deserve.
                    </p>
                    <Button customClass="w-full sm:w-full md:w-auto">Learn more</Button>
                </div>
            </div>
        </div>
    );
}
