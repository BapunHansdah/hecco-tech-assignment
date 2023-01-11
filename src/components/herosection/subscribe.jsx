import react,{useState} from 'react'
import Timer from './timer'
import Form from './form'
import Success from './success'
import Heading from './heading'


function Main() {
  const [success,setSuccess] = useState(false)
  function subscribe(){
    setSuccess(!success)
  }
  return (
    <div className="flex flex-col bg-white shadow max-w-lg mx-auto font-Nution rounded-b-2xl h-[650px] md:h-[600px]">
      <Timer />
      <Heading/>
      {
        success === false ? 
        <Form subscribe={subscribe}/>:
        <Success/>
      }
    </div>
  )
}

export default Main;