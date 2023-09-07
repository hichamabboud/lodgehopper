import { Input } from "@/components/ui/input";
import AdjustmentsHorizontal from "./icons/AdjustmentsHorizontal";
import ResidentsShow from "./ResidentsShow";

export default function Navbar() {
  return (
    <div className='shadow-md shadow-gray-200 py-8 rounded-b-[3rem] space-y-4 max-h-56 overflow-hidden'>
      <div className="w-[80%] mx-auto relative">
        <Input type="text" placeholder="Where.When.Who" className="rounded-full h-16 shadow-md" />
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
