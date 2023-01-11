import react,{useState,useEffect} from 'react'
import profile from '../../assets/images/Ellipse108.png'


function Main(){
 
    
      
	return(	
		<div className="h-[800px] bg-[#FBF6EE] flex justify-center items-center relative overflow-hidden">
      
      <div className="shadow-2xl rounded-full h-[300px] w-[300px] md:h-[360px] md:w-[360px] flex justify-center items-center flex-col  p-5 text-center bg-white gap-5 z-10">
        <div className="text-[96px] text-[#035156] font-Lora font-bold leading-10">98<span className="text-3xl">%</span></div>
        <hr className="border w-full "/>
        <div className="text-xl font-Lora px-5">Saw improvement in there health and quality of life in just <span>three months</span></div>
      </div>
      <div>
        <img className='top-[20px] left-[10px] absolute animate' src={profile}/> 
        <img className='top-[130px] left-[1500px] absolute animate' src={profile}/> 
        <img className='top-[170px] left-[1000px] absolute animate' src={profile}/> 
        <img className='top-[100px] left-[120px] absolute animate' src={profile}/> 
        <img className='top-[200px] left-[560px] absolute animate' src={profile}/> 
        <img className='top-[240px] left-[40px] absolute animate' src={profile}/> 
        <img className='top-[290px] left-[900px] absolute animate' src={profile}/> 
        <img className='top-[350px] left-[600px] absolute animate' src={profile}/> 
        <img className='top-[380px] left-[390px] absolute animate' src={profile}/> 
        <img className='top-[980px] left-[700px] absolute animate' src={profile}/> 
         <img className='top-[880px] left-[300px] absolute animate' src={profile}/>  
        <img className='top-[930px] left-[220px] absolute animate' src={profile}/> 
         <img className='top-[880px] left-[400px] absolute animate' src={profile}/> 
         <img className='top-[980px] left-[740px] absolute animate' src={profile}/> 
         <img className='top-[280px] left-[380px] absolute animate' src={profile}/> 
         <img className='top-[980px] left-[900px] absolute animate' src={profile}/> 
         <img className='top-[180px] left-[330px] absolute animate' src={profile}/> 
         <img className='top-[450px] left-[790px] absolute animate' src={profile}/> 
         <img className='top-[480px] left-[700px] absolute animate' src={profile}/> 
        
      </div>
      
		</div>
	)
}

export default Main;