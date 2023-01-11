import react from 'react'
import instagram from '../assets/images/instagram.svg'
import facebook from '../assets/images/facebook.svg'

function Main(){
	return(	
		<div className='grid grid-cols-1 lg:grid-cols-2 bg-[#035156] text-white  px-6 py-5 gap-4'>
      <div className='flex flex-col text-center sm:flex-row gap-2 items-center justify-center lg:justify-start'>
         <div>© 2022 Nirva • London, UK • Delaware, USA</div>
        <div className="h-4 border-l hidden sm:block"></div>
        <div>Privacy Policy</div>
        <div className="h-4 border-l hidden sm:block"></div>
        <div>Terms & Conditions</div>
      </div>
      <div className="flex justify-center lg:justify-end gap-5">
        <div>get in touch</div>
        <div className="flex gap-5">
           <span><img src={instagram}/></span>
           <span><img src={facebook}/></span>
        </div>
      </div>
		</div>
	)
}

export default Main;