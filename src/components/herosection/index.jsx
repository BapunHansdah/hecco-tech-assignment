import Description from "./description"
import Subscribe from "./subscribe"


function Main(){
	return(	
		<div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[800px] justify-items-center gap-10 lg:gap-0 py-10 lg:mt-0 items-center bg-[#F1FAFB] px-6 ">
       <Description/> 
       <Subscribe/>
		</div>
	)
}

export default Main;