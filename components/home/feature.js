import Image from "next/image";
import Link from "next/link";
import Button from "../button";
import { circleDecorCorner, featureImg1, featureImg2, featureImg3, featureImg4, featureIntroBg } from "../image";
export default function Feature() {
    return (
        <div className="bg-light relative overflow-hidden py-14 sm:py-14 md:py-28 lg:py-28">
            <div className="absolute -top-[20%] -left-[16%]"><Image src={circleDecorCorner} /></div>
            <div className="flex flex-wrap w-full sm:w-full md:w-10/12 lg:w-10/12 mx-auto overflow-hidden">
                <div className="w-full sm:w-full md:w-4/12 lg:w-3/12 xl:w-3/12 2xl:w-2/12 mb-6 sm:mb-6 md:mb-0 lg:mb-0">
                    <div className="relative flex items-end justify-center relative md:mt-32 lg:mt-32">
                        <div className="absolute h-2 w-32 bg-[#E0E7FF] top-1/2 md:top-1/3 lg:-top-1/2 -left-1/4 z-50 hidden sm:hidden md:block lg:block"></div>
                        <div className="pb-20 absolute bottom-0 z-10 inline-block px-8">
                            <h4 className="font-buljirya text-3xl capitalize leading-loose text-white text-center mb-3">Featured Services</h4>
                            <div className="px-12 sm:px-12 md:px-0 lg:px-0"><Button customClass="border-white bg-transparent uppercase md:px-4 lg:px-8 3xl:px-4 4xl:px-8" outline="border" textColor="text-white" expand="w-full">See all Services</Button></div>
                        </div>
                        <div className="img-full w-full px-4 sm:px-4 md:px-0 lg:px-0">
                            <Image src={featureIntroBg} />
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-full md:w-8/12 lg:w-9/12 xl:w-9/12 2xl:w-10/12">
                    <div className="flex flex-wrap items-end px-4 sm:px-4 md:px-0 lg:px-0">
                        <ServiceItem
                            serviceImage={<Image src={featureImg1} width={300} height={350} className="object-cover" layout="responsive" />}
                            title="COSMETIC"
                            description="We know that having a healthy, bright and beautiful smile allows us to smile with confidence. Thanks to advances in cosmetic dentistry, we can easily enhance your smile."
                            linkDetail="#"
                        />
                        <ServiceItem
                            serviceImage={<Image src={featureImg2} width={300} height={300} className="object-cover" layout="responsive" />}
                            title="IMplants"
                            description="Our skilled dentist and team use cutting-edge technology to place dental implants and restore our patients’ smiles precisely and painlessly. "
                            linkDetail="#"
                        />
                        <ServiceItem
                            serviceImage={<Image src={featureImg3} width={300} height={300} className="object-cover" layout="responsive" />}
                            title="Invisalign®"
                            description="You can straighten your smile without braces with the help of Invisalign® clear aligners! Achieving your dream smile is even easier than you may think. "
                            linkDetail="#"
                        />
                        <ServiceItem
                            serviceImage={<Image src={featureImg4} width={300} height={300} className="object-cover" layout="responsive" />}
                            title="family dentistry"
                            description="Whatever your dental needs are, we promise to provide you with exceptional care as we enhance the natural beauty of your smile. "
                            linkDetail="#"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function ServiceItem({ serviceImage, title, description, linkDetail }) {
    return (
        <>
            <div className="w-full sm:w-full md:w-6/12 lg:w-3/12 mb-6 sm:mb-6 md:mb-0 lg:mb-0 flex flex-col md:even:flex-col lg:even:flex-col-reverse last:mb-0">
                <div className="img-full -mb-2 flex-1">{serviceImage}</div>
                {/* <div className="bg-white p-8 h-[330px] sm:h-[330px] md:h-auto lg:h-auto xl:h-auto"> */}
                <div className="bg-white aspect-square flex-1">
                    <div className="p-8">
                        <h4 className="text-2xl uppercase">{title}</h4>
                        <p className="my-5 leading-8">{description}</p>
                        <Link href={linkDetail}><a className="text-primary pb-2 border-b border-primary">Learn more</a></Link>
                    </div>
                </div>
            </div>
        </>
    );
}
