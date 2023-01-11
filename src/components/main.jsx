import react from 'react'
import Header from "./header"
import Hero from "./herosection/index"
import First from "./firstsection/result"
import Second from "./secondsection/index"
import Third from "./thirdsection/index"
import Footer from "./footer" 


function Main(){
	return(	
		<div className="">
      <Header/>
      <Hero/>
      <First/>
      <Second/>
      <Third/>
      <Footer/>
		</div>
	)
}

export default Main;