import Image from "next/image";
import Link from "next/link";
import CircleIcon from "./circleIcon";
import FacebookLine from "./icons/facebookLine";
import FlowerLine from "./icons/flowerLine";
import YoutubeLine from "./icons/youtubeLine";
import { logo, mapLineIcon, phoneLineFooter } from "./image";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-wrap border-b border-dark-700 bg-dark-900">
        <div className="w-full sm:w-full md:w-full lg:w-full xl:w-3/12 border-b sm:border-b md:border-0 lg:border-0 last:border-b-0">
          <div className="bg-dark-900 h-full py-14 px-4 sm:px-4 md:px-5 lg:px-5 xl:px-6">
            <div className="footer-info">
              <div className="mb-5">
                <Image src={logo} width={384} height={69} className="brightness-100" />
              </div>
              <div className="flex flex-wrap text-white mb-8">
                <Image src={mapLineIcon} width={25} height={25} className="mr-3" />
                <p className="w-[calc(100%_-_45px)] ml-auto">24953 Paseo De Valencia, #6c, Laguna Hills, Ca 92653</p>
              </div>
              <div className="flex flex-wrap text-primary mb-8">
                <Image src={phoneLineFooter} width={25} height={25} className="mr-3" />
                <p className="w-[calc(100%_-_45px)] ml-auto text-3xl">(949) 415 - 7776</p>
              </div>
              <div className="flex">
                <CircleIcon borderColor="border-white" customClass="w-11 h-11 mr-7">
                  <FacebookLine customClass="stroke-white m-auto" />
                </CircleIcon>
                <CircleIcon borderColor="border-white" customClass="w-11 h-11 mr-7">
                  <YoutubeLine customClass="stroke-white m-auto" />
                </CircleIcon>
                <CircleIcon borderColor="border-white" customClass="w-11 h-11 mr-7">
                  <FlowerLine customClass="stroke-white m-auto" />
                </CircleIcon>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-right-content w-full sm:w-full md:w-full lg:w-full xl:w-9/12 relative">
          <div className="absolute -top-4 left-4 sm-left-4 md:left-12 lg:left-12 right-0 h-4 bg-primary"></div>
          <div className="bg-dark-800 py-14 px-4 sm:px-4 md:px-4 lg:px-4 xl:px-6 ml-4 sm:ml-4 md:ml-0 lg:ml-0">
            <div className="px-2 sm:px-2 md:px-5 lg:px-5">
              <div className="flex flex-wrap">
                <div className="w-full sm:w-full md:w-5/12 lg:w-4/12 xl:w-4/12 2xl:w-3/12 mb-10 sm:mb-10 md:mb-0 lg:mb-0">
                  <h4 className="capitalize md:text-2xl text-3xl mt-3 md:pb-12 lg:pb-12 md:border-b lg:border-b border-dark-700 text-primary inline-block font-buljirya">For Patients</h4>
                  <ul className="pt-12">
                    <li className="last:mb-0 mb-4"><Link href="#"><a className="uppercase text-white">Contact</a></Link></li>
                    <li className="last:mb-0 mb-4"><Link href="#"><a className="uppercase text-white">Gallery</a></Link></li>
                    <li className="last:mb-0 mb-4"><Link href="#"><a className="uppercase text-white">Patient Forms</a></Link></li>
                    <li className="last:mb-0 mb-4"><Link href="#"><a className="uppercase text-white">Review</a></Link></li>
                  </ul>
                </div>
                <div className="w-full sm:w-full md:w-7/12 lg:w-8/12 xl:w-8/12 2xl:w-9/12">
                  <h4 className="capitalize md:text-2xl text-3xl mt-3 md:pb-12 lg:pb-12 md:border-b lg:border-b border-dark-700 text-primary font-buljirya">Service</h4>
                  <div className="flex flex-wrap">
                    <div className="w-full sm:w-full md:w-6/12 lg:w-3/12 border-b sm:border-b md:border-0 lg:border-0 last:border-b-0">
                      <ul className="pt-12 pb-12 sm:pb-12 md:pb-0 lg:pb-0">
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white">Cosmetic Dentistry</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white">Dental Bonding</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white">Dental Veneers</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white">Invisalign® Clear Aligners</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white">Lumineers®</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white">Smile Makeover</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white">Zoom Teeth Whitening</a></Link></li>
                      </ul>
                    </div>
                    <div className="w-full sm:w-full md:w-6/12 lg:w-3/12 border-b sm:border-b md:border-0 lg:border-0 last:border-b-0">
                      <ul className="pt-12 pb-12 sm:pb-12 md:pb-0 lg:pb-0">
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white">Dental Technology</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white">CEREC Same-Day Crowns</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white">Digital X-Rays</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white">Intraoral Camera</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white">Laser Dentistry</a></Link></li>
                      </ul>
                    </div>
                    <div className="w-full sm:w-full md:w-6/12 lg:w-3/12 border-b sm:border-b md:border-0 lg:border-0 last:border-b-0">
                      <ul className="pt-12 pb-12 sm:pb-12 md:pb-0 lg:pb-0">
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white">General & Family Dentistry</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white"> Dental Cleanings</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white"> Dental Exams</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white"> Dental Sealants</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white"> Emergency Dental Care</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white"> Gum Disease Treatment</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white"> Night Guards</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white"> Sedation Dentistry</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white"> Sleep Apnea Treatment</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white"> TMJ Treatment</a></Link></li>
                      </ul>
                    </div>
                    <div className="w-full sm:w-full md:w-6/12 lg:w-3/12 border-b sm:border-b md:border-0 lg:border-0 last:border-b-0">
                      <ul className="pt-12 pb-12 sm:pb-12 md:pb-0 lg:pb-0">
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white">Restorative Dentistry</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white">CEREC Same-Day Crowns</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white"> Composite Dental Fillings</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white"> Dental Bridges</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white"> Dental Implants</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white"> Dental Inlays</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white"> Dental Onlays</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white"> Dentures & Partials</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white"> Full-Mouth Reconstruction</a></Link></li>
                        <li className="last:mb-0 mb-4"><Link href="#"><a className="text-white"> Overbite & Underbite Correction</a></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-dark-900 text-center text-white px-5 py-6">
        <p>Invisalign and the Invisalign logo, among others, are trademarks of Align Technology, Inc., and are registered in the U.S. and other countries.<br />
          © Copyright 2022 Pro Smiles OC. All Rights Reserved. - Privacy Policy - Website Design by </p>
      </div>
    </>
  );
}
