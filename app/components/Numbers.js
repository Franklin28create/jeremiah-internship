import { BiCrown } from "react-icons/bi";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { RiLeafLine } from "react-icons/ri";

export default function Numbers() {
  return (
    <section id="numbers">
      <div className="px-10 w-full">
        <div className="max-w-5xl w-full mx-auto py-6">
          <div className="text-3xl text-[#032b41] text-center mb-8 font-bold">Start growing with Summarist now</div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="bg-[#d7e9ff] flex flex-col items-center text-center p-6 pb-10 rounded-xl">
              <div className="flex items-center h-16 gap-1">
                <BiCrown className="text-[#0365f2] w-12 h-12" />
              </div>
              <div className="text-3xl md:text-4xl text-[#032b41] font-semibold mb-4">3 Million</div>
              <div className="text-[#394547] font-medium md:text-base text-xl">Downloads on all platforms</div>
            </div>
            <div className="bg-[#d7e9ff] flex flex-col items-center text-center p-6 pb-10 rounded-xl">
              <div className="flex items-center h-16 gap-1">
                <BsStarFill className="w-5 h-5 fill-[#0564f1]" />
                <BsStarFill className="w-5 h-5 fill-[#0564f1]" />
                <BsStarFill className="w-5 h-5 fill-[#0564f1]" />
                <BsStarFill className="w-5 h-5 fill-[#0564f1]" />
                <BsStarHalf className="w-5 h-5 fill-[#0564f1]" />
              </div>
              <div className="text-3xl md:text-4xl text-[#032b41] font-semibold mb-4">4.5 Stars</div>
              <div className="text-[#394547] font-medium md:text-base text-xl">
                Average ratings on iOS and Google Play
              </div>
            </div>
            <div className="bg-[#d7e9ff] flex flex-col items-center text-center p-6 pb-10 rounded-xl">
              <div className="flex items-center h-16 gap-1">
                <RiLeafLine className="text-[#0365f2] w-12 h-12"/>
              </div>
              <div className="text-3xl md:text-4xl text-[#032b41] font-semibold mb-4">97%</div>
              <div className="text-[#394547] font-medium md:text-base text-xl">
                Of Summarist members create a better reading habit
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
