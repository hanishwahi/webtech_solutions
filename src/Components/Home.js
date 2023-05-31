import React from 'react'
import Banner from './Banner'
import CreateWebsite from './CreateWebsite'
import DataMapping from './GrowBusiness'
import HowWeWorks from './HowWeWorks'
// import Blogs from './Blogs'
import ContactForm from './ContactForm'
import Faq from './Faq'
import TakeEmail from './TakeEmail'
 
   
function Home() {
  
  
  return (
    <>
    
    <Banner/>
    <CreateWebsite/>
    <DataMapping/>
    <HowWeWorks/>
    {/* <Blogs/> */}
    <ContactForm/>
    <Faq/>
    <TakeEmail/> 

     
    
    </>
  )
}

export default Home