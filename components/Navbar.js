"use client"
import { Input } from "@/components/ui/input";
import AdjustmentsHorizontal from "./icons/AdjustmentsHorizontal";
import ResidentsShow from "./ResidentsShow";
import Image from "next/image";


export default function Navbar() {
  
  return (
    <div className='shadow-md shadow-gray-200 py-8 rounded-b-[2rem] space-y-4 max-h-[14rem] overflow-hidden'>
      <div className="w-[80%] mx-auto relative">
        <Image src="/../../favicon.ico" className=" absolute left-3 top-4" width={32} height={32} alt="logo" />
        <span className="absolute left-16 top-2 text-lg font-bold text-gray-900">Find a choice</span>
        <Input type="text" placeholder="Where.When.Who" className="rounded-full pt-10 pb-6 shadow-md pl-16" />
        <div className="absolute top-0 bottom-0 right-6 my-auto bg-gray-100 w-10 aspect-square rounded-full p-2">
          <AdjustmentsHorizontal />
        </div>
      </div>

      {/* Residents */}
      <div>
          <ResidentsShow />
      </div>
    </div>
  )
}
