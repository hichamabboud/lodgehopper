
export default function ResidentsShow() {
    const width = "w-8 aspect-square";
    const housesSvg =   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor" className={width}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                        </svg>
    const homeSvg =     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 
                            24 24" strokeWidth={1.5} stroke="currentColor" className={width}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
    const apartmentsSvg = <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={width}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                            </svg>
    const condoSvg = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 
                        24 24" strokeWidth={1.5} stroke="currentColor" className={width}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                    </svg>
    const typeOfResidents = [
        {residentType: 'Houses', svg : housesSvg},
        {residentType: 'Apartment', svg : apartmentsSvg},
        {residentType: 'Houses', svg : homeSvg},
        {residentType: 'Houses', svg : housesSvg},
        {residentType: 'Condo', svg : condoSvg},
        {residentType: 'Houses', svg : housesSvg},
        {residentType: 'Houses', svg : housesSvg},
        {residentType: 'Houses', svg : housesSvg},
        {residentType: 'Houses', svg : housesSvg},
    ]


  return (
    <ul className="flex flex-row gap-2 ml-6 overflow-y-auto">
          {typeOfResidents.map(({ residentType, svg}=resident, index) => (
            <li className="px-6 py-4 w-24 aspect-square text-gray-500 hover:text-gray-800 hover:underline hover:underline:transition hover:decoration-2 hover:underline-offset-8 active:text-gray-950 space-y-2" key={index}>
                {svg}
                <p className="font-semibold text-sm">{residentType}</p>
            </li>
            ))}
    </ul>
  )
}
