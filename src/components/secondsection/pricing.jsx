import react from 'react'
import Union from '../../assets/images/Ellipse.svg'

function Main({selected}){
	return(	
      <div className={`max-w-lg w-full ${selected ? "bg-[#035156] text-white": "bg-white text-[#035156]"}  flex justify-between rounded-2xl px-5 py-2 items-center`}>
        <div className="flex flex-col gap-2">
          <h3>Optimum(6 months)</h3>
          <div><button className="bg-white bg-opacity-50 p-2 py-1 rounded-full">Save 30%</button></div>
        </div>
        <div className="flex items-center">
          <div>
            <h3 className="text-lg line-through	">£1062</h3>
          <h2 className="text-2xl font-bold font-Lora">£799</h2>
          <h4>£133/month</h4>
          </div>
          <div>
          <img className='w-10' src={Union}/>
          </div>
        </div>
      </div>
	)
}

export default Main;