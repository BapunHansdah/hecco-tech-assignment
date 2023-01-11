import react from 'react'
import Plan from "./plans"
import Pricing from "./pricings"
import Progress from "./progress"

function Main(){
	return(	
		<div className="px-2 mx-auto flex flex-col justify-center items-center gap-10 py-10 bg-[#F1FAFB] w-full">
    <Progress/>
      <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center justify-items-center">
        <Plan/>
        <Pricing/>
      </div>
      
      
		</div>
	)
}

export default Main;