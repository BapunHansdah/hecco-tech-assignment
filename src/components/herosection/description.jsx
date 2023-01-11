import react from 'react'
import Union from '../../assets/images/Ellipse.svg'

function Main(){
	return(	
		<>
      <div className="max-w-[600px]">
        <h1 className="font-Lora text-[2.5em] md:text-[3.5em] text-[#035156] border font-black md:leading-[72px] text-center md:text-left">Ayurbeda and <br/> theraputic Yoga to <br/> help your body heal! </h1>
        <p className="font-Nutino text-2xl my-5 font-semibold text-center md:text-left">lorem ipsum dolor lorem ipsum lorem ipsum</p>
        <ul className="text-xl font-Nutino font-semibold flex flex-col gap-4 ">
          <li className="flex items-center gap-2">
          <img src={Union} />lorem ipsum dolor lorem ipsum lorem ipsum
          </li>
          <li className="flex items-center gap-2">
          <img src={Union} />lorem ipsum dolor lorem ipsum lorem ipsum
          </li>
          <li className="flex items-center gap-2">
          <img src={Union} />lorem ipsum dolor lorem ipsum lorem ipsum
          </li>
          
        </ul>
      </div>
		</>
	)
}

export default Main;