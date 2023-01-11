import react from 'react'
function Main() {
  return (
    <div className="flex flex-col shadow ">
      <div className="flex flex-col md:flex-row bg-[#035156] text-white items-center justify-center rounded-t-2xl gap-3 p-5">
        <h1 className="text-2xl">Hurry Up !</h1>
        <div className='flex gap-2'>
          <div className="bg-white w-[55px] h-[55px] rounded-xl flex flex-col text-center justify-center">
          <span className="text-[#035156] text-2xl font-bold font-Nutino">05</span>
          <span className="text-[#035156] text-xs">Day</span>
        </div>
        <div className="bg-white w-[55px] h-[55px] rounded-xl flex flex-col text-center justify-center">
          <span className="text-[#035156] text-2xl font-bold font-Nutino">05</span>
          <span className="text-[#035156] text-xs">Day</span>
        </div>
        <div className="bg-white w-[55px] h-[55px] rounded-xl flex flex-col text-center justify-center">
          <span className="text-[#035156] text-2xl font-bold font-Nutino">05</span>
          <span className="text-[#035156] text-xs">Day</span>
        </div>
        <div className="bg-white w-[55px] h-[55px] rounded-xl flex flex-col text-center justify-center">
          <span className="text-[#035156] text-2xl font-bold font-Nutino">05</span>
          <span className="text-[#035156] text-xs">Day</span>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Main;