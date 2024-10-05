import React,{ useEffect} from 'react'
import HeroSection from './Components/HeroSection'
import { GlobalStyle } from './GlobalStyle'
import {  useGlobalContext } from './Context'
import Services from './Services';
import Contact from './Contact';


const Home = () => {

 


  // const data={
  //   name:"TechPulse",
  //   image:"https://www.kudosintech.com/wp-content/uploads/2023/07/Mobile-Application-Development.svg",

  // };
  const {updateHomePage}=useGlobalContext();

  useEffect(()=>updateHomePage(),[]);
  return (
    <>
       <GlobalStyle/>
      <HeroSection />
      <Services/>
      <Contact/>
      </>
  );
   
};

export default Home;
