import Image from "next/image"
import Button from "../button";
import { partnerImg1, partnerImg2, partnerImg3, partnerImg4, partnerImg5, partnerImg6, partnerImg7 } from "../image";
export default function ContactInfo() {
    return (
        <div className="py-16">
            <div className="w-full sm:w-full md:w-10/12 lg:w-10/12 mx-auto px-4 sm:px-4 md:px-0 lg:px-0">
                <div className="flex flex-wrap">
                    <div className="w-full sm:w-full md:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 3xl:w-4/12 4xl:w-3/12">
                        <div className="py-16 px-5 sm:px-5 md:px-4 lg:px-6 bg-primary">
                            <h4 className="font-buljirya text-white text-3xl capitalize text-center pb-6 md:leading-loose mt-4">Office Hours</h4>
                            <div className="border-b border-white w-9/12 mx-auto"></div>
                            <div className="pt-6 px-3">
                                <ListItem leftText="Monday" rightText="9:00 A.M. - 1:00 P.M" />
                                <ListItem leftText="Tuesday" rightText="9:00 A.M. - 4:00 P.M." />
                                <ListItem leftText="Wednesday" rightText="9:00 A.M. - 1:00 P.M" />
                                <ListItem leftText="Thursday" rightText="10:00 A.M. - 6:00 P.M." />
                                <ListItem leftText="Friday" rightText="By Appointment Only" />
                                <ListItem leftText="Saturday" rightText="Closed" />
                                <ListItem leftText="Sunday" rightText="Closed" />
                            </div>
                            <Button expand="w-full" bgColor="bg-secondary" textColor="text-dark" height="h-14">Schedule an Appointment</Button>
                        </div>
                    </div>
                    <div className="w-full sm:w-full md:w-6/12 lg:w-7/12 xl:w-8/12 2xl:9/12 3xl:w-8/12 4xl:w-9/12">
                        <div className="h-full">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.1624538990086!2d-117.70149558440669!3d33.60108914881623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce8dc8a13bb49%3A0xe0576b07824c5812!2sc%2C%2024953%20Paseo%20De%20Valencia%20%236c%2C%20Laguna%20Hills%2C%20CA%2092653%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1655634681460!5m2!1svi!2s" className="w-full h-[593px] sm:h-[593px] md:h-full lg:h-full border-0" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ListItem({ leftText, rightText }) {
    return (
        <>
            <div className="flex items-center justify-between text-white mb-5">
                <span className="w-32">{leftText}</span>
                <span className="w-[calc(100%_-_112px)]">{rightText}</span>
            </div>
        </>
    );
}
