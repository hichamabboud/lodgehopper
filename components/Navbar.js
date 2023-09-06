import { Input } from "@/components/ui/input";
import AdjustmentsHorizontal from "./icons/AdjustmentsHorizontal";

export default function Navbar() {
  return (
    <div className='shadow-md shadow-gray-200 py-8 rounded-b-[3rem]'>
      <div className="w-[80%] mx-auto relative">
        <Input type="text" placeholder="Where.When.Who" className="rounded-full h-16 shadow-md" />
        <div className="absolute top-0 bottom-0 right-6 my-auto bg-gray-100 w-10 aspect-square rounded-full p-2">
          <AdjustmentsHorizontal />
        </div>
      </div>

      {/* Residents */}
      <div className="flex space-x-4">
          <div className="bg-gray-100 px-8 py-4 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 aspect-square">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
            </svg>
            <p className=" font-semibold">Houses</p>
          </div>
        
          <div className="bg-gray-100 px-8 py-4 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 aspect-square">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
              </svg>
              <p className=" font-semibold">Houses</p>
          </div>
      </div>
    </div>
  )
}
