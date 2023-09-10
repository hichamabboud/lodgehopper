import Image from "next/image"
import Heart from "./icons/Heart"

export default function HeroSection() {
  const properties = [
    { imgSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80", price: 86 },
    {imgSrc: "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", price: 72},
    {imgSrc: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80", price: 66},
    ]
  return (
    <section className="mt-8 w-full">
      <article className="w-[80vw] max-w-5xl mx-auto">
        <div className="flex flex-col space-y-16">
          {properties.map((property, index) => (
            <div key={index} className="w-full rounded-3xl relative "> {/*card */}
              { /*card-section one */}
              <div>
                <Image src={property.imgSrc} className="aspect-square rounded-3xl" width={600} height={500} alt="property" />
                <div className=" bg-gray-300 py-2 px-4 opacity-60 rounded-full absolute right-6 bottom-10">
                <span className=" font-bold text-black text-2xl leading-8">${ property.price}</span>
                <span className=" text-xs font-semibold">/night</span>
                </div>
                <div className="absolute top-6 right-14 bg-gray-100 w-10 aspect-square rounded-full p-2">
                <Heart />
                </div>
              </div>
            </div>
          ))}  
        </div>
      </article>
    </section>
  )
}
