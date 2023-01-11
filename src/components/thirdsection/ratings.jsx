import react from 'react'
import logo from '../../assets/images/Union.svg'
import rect from '../../assets/images/Rectangle1849.png'
import trustPilot from '../../assets/images/image35.png'




function Main(){
	return(	
		<>
      <div className='px-6 max-w-lg w-full flex justify-between md:grid'>
        <div className='flex'><img src={logo}/></div>
        <div className='flex flex-col md:flex-row gap-2'>
          <div><img src={trustPilot}/></div>
          <div className="flex items-center">
             <span><img src={rect}/></span>
             <span><img src={rect}/></span>
             <span><img src={rect}/></span>
             <span><img src={rect}/></span>
             <span><img src={rect}/></span>
          </div>
          <div>
            Rated exellent <br/> trust score 4.8/5
          </div>
        </div>
      </div>
		</>
	)
}

export default Main;