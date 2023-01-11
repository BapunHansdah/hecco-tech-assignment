import react from 'react'
import Oval from '../../assets/images/Oval.svg'

function Main(){
	return(	
		<>
      <div className="">
        <h1 className="font-Nutino text-3xl text-[#035156] font-bold	">Nirvas Integrated Car plan </h1>
        <p className="font-Nutino text-2xl my-5 font-semibold">Become yara member today</p>
        <ul className="text-xl font-Nutino font-semibold flex flex-col gap-4 py-5">
          <li className="flex items-center gap-2">
          <img src={Oval} />Unlimited Consultations with Ayurveda Practitioners
          </li>
          <li className="flex items-center gap-2">
          <img src={Oval} />4 live 1-to-1 Yoga sessions (50 minutes each)
          </li>
          <li className="flex items-center gap-2">
          <img src={Oval} />Dedicated health coach
          </li>
          <li className="flex items-center gap-2">
          <img src={Oval} />Personalized diet plan
          </li>
          <li className="flex items-center gap-2">
          <img src={Oval} />Access to Nirva Health App
          </li>
          <li className="flex items-center gap-2">
          <img src={Oval} />Access to a library of Yoga videos (?)
          </li>
          <li className="flex items-center gap-2">
          <img src={Oval} />Access to a library of recipes
          </li>
          
        </ul>
      </div>
		</>
	)
}

export default Main;