import react from 'react'
import Pricing from "./pricing"
function Main(){
	return(	
		<div className="flex flex-col justify-center gap-3 w-full items-center">
     <Pricing selected={true}/>
     <Pricing/>
     <Pricing/>
		</div>
   
	)
}

export default Main;