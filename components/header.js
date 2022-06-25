import Image from "next/image";
import Link from "next/link";
import CircleIcon from "./circleIcon";
import FacebookLine from "./icons/facebookLine";
import FlowerLine from "./icons/flowerLine";
import YoutubeLine from "./icons/youtubeLine";
import PhoneLine from "./icons/phoneline";
import { useRouter } from "next/router";
import { logo } from "./image";
import MenuBar from "./icons/menuBar";

export default function Header() {
  const router = useRouter();
  return (
    <nav className="md:h-[99px] lg:h-[99px] flex flex-wrap items-center">
      <div className="w-full sm:w-full md:w-3/12 lg:w-3/12 h-[82px] sm:h-[82px] md:h-auto flex items-center">
        <div className="px-3 sm:px-3 md:pr-0 md:pl-4 lg:pl-14 w-full -mb-2 text-center sm:text-center md:text-left lg:text-left shrink-0 md:h-auto">
          <Image src={logo} height={69} width={380} />
        </div>
      </div>
      <div className="w-full sm:w-full md:w-9/12 lg:w-9/12">
        <div className="h-[60px] sm:h-[60px] md:h-[44px] lg:h-[44px] flex justify-end">
          <div className="hidden sm:hidden md:flex lg:flex justify-end items-center pr-6">
            <div className="flex">
              <CircleIcon borderColor="border-dark-500" customClass="h-[30px] w-[30px] last:mr-0 mr-7 sm:mr-7 md:mr-3 lg:mr-4">
                <FacebookLine customClass="fill-white stroke-dark-500 stroke-1 h-[15px] m-auto" />
              </CircleIcon>
              <CircleIcon borderColor="border-dark-500" customClass="h-[30px] w-[30px] last:mr-0 mr-7 sm:mr-7 md:mr-3 lg:mr-4">
                <YoutubeLine customClass="fill-white stroke-dark-500 stroke-1 h-[15px] m-auto" />
              </CircleIcon>
              <CircleIcon borderColor="border-dark-500" customClass="h-[30px] w-[30px] last:mr-0 mr-7 sm:mr-7 md:mr-3 lg:mr-4">
                <FlowerLine customClass="fill-white stroke-dark-500 stroke-1 h-[15px] m-auto" />
              </CircleIcon>
            </div>
            <div className="mx-6">|</div>
            <div className="flex items-center text-dark-500"><PhoneLine customClass="h-[22px] w-[22px] mr-3 fill-dark-500" />949-880-6638</div>
          </div>
          <div className="flex sm:flex md:hidden lg:hidden items-center pl-4 bg-primary w-6/12"><MenuBar customClass="fill-white" /></div>
          <div className="flex items-center md:pr-4 md:pl-4 px-3 sm:px-3 lg:pr-14 justify-center sm:justify-center bg-primary-dark text-white w-6/12 sm:w-6/12 md:w-auto text-sm md:text-base">Schedule an Appointment</div>
        </div>
        <div className="h-[60px] sm:h-[60px] md:h-[55px] lg:h-[55px] bg-primary rounded-tl-full hidden sm:hidden md:flex lg:flex items-center justify-end pr-4 md:pr-4 lg:pr-14">
          <ul className="flex items-center h-full">
            <li className={router.pathname == "/" ? "last:mr-0 mr-12 sm:mr-12 md:mr-4 lg:mr-4 xl:mr-6 h-full flex items-center border-b border-b-[2px] border-white" : "last:mr-0 mr-12 sm:mr-12 md:mr-4 lg:mr-4 xl:mr-6 h-full flex items-center"}>
              <Link href="/"><a className="uppercase text-white">Home</a></Link>
            </li>
            <li className="last:mr-0 mr-12 sm:mr-12 md:mr-4 lg:mr-4 xl:mr-6 h-full flex items-center"><Link href="#"><a className="uppercase text-white">about us</a></Link></li>
            <li className="last:mr-0 mr-12 sm:mr-12 md:mr-4 lg:mr-4 xl:mr-6 h-full flex items-center"><Link href="#">
              <a className="uppercase text-white flex items-center">
                Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-white ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </Link>
            </li>
            <li className="last:mr-0 mr-12 sm:mr-12 md:mr-4 lg:mr-4 xl:mr-6 h-full flex items-center"><Link href="#">
              <a className="uppercase text-white flex items-center">
                patient forms
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-white ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </Link>
            </li>
            <li className="last:mr-0 mr-12 sm:mr-12 md:mr-4 lg:mr-4 xl:mr-6 h-full flex items-center"><Link href="#"><a className="uppercase text-white">Finances</a></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
