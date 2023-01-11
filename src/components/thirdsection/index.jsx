import react from 'react'
import Rating from './ratings'
import Newsletter from './newsletter'


function Main(){
	return(	
		<div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center py-10 gap-10 py-10'>
      <Rating/>
      <Newsletter/>
		</div>
	)
}

export default Main;