import react from 'react'
import logo from '../assets/images/Union.svg'
function Main() {
  return (
    <div className="px-6 bg-[#F1FAFB]">
      <div className="flex flex-col lg:flex-row justify-between px-5 py-5 border-b-2 border-[#035156]  border-opacity-50">
        <div className="flex items-center"><img src={logo} /></div>
        <div className="flex gap-5 lg:gap-10 flex-col lg:flex-row text-[#035156] mt-10 lg:mt-0">
          <div className="flex flex-col justify-center text-2xl">
            <div className="flex justify-end justify-center lg:justify-end">Workshop on</div>
            <span className="flex justify-center font-Nutino font-bold text-center">18th September 2022, at 6:00 pm BST</span>
          </div>
          <div className="flex items-center justify-end justify-center">
            <button className="font-Nutino font-semibold bg-orange-400 text-2xl text-white px-3 py-2 tracking-wider rounded-full flex ">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;