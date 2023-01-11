import react from 'react'
import flag from '../../assets/images/image138.png'

function Main({subscribe}) {
  return (
      <form className="w-full px-5 justify-center md:px-20 py-5">
        
        <div className="text-lg font-semibold font-poppins py-1 ">
          Name*
        </div>
        <input className="p-2 w-full border border-gray-400 rounded-md" placeholder="name" />
        <div className="text-lg font-semibold font-poppins py-1 ">
          Email*
        </div>
        <input className="p-2 w-full border border-gray-400 rounded-md" placeholder="email" />
        <div className="text-lg font-semibold font-poppins py-1 ">phone</div>
        <div className="flex">
          <select className="p-2 border border-gray-400 rounded-l-md">
            <option>US</option>
          </select>
          <input className="p-2 w-full border border-gray-400 rounded-r-md" placeholder="phone" />
        </div>
        <button className="font-semibold w-full p-4 bg-orange-400 text-white rounded-md mt-5 text-2xl" onClick={subscribe}>Join Now</button>
        <p className="text-md text-center text-gray-500">By clicking on book now button </p>
      </form>
  )
}

export default Main;