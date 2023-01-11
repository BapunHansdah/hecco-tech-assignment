import react from 'react'


function Main(){
	return(	
		<div className='w-full px-6 max-w-lg'>
      <div className='font-Nutino'>Sign up for Newsletter</div>
      <div className='w-full flex flex-col md:flex-row gap-2 md:gap-0'>
        <input className='p-2 border w-full md:w-9/12'/>
        <button className='p-2 bg-[#005959] w-full md:w-3/12 text-white'>SIGN UP</button>
      </div>
		</div>
	)
}

export default Main;