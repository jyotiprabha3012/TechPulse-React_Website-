import React,{useEffect}from 'react'
import HeroSection from './Components/HeroSection'
import { GlobalStyle } from './GlobalStyle';
import { useGlobalContext } from './Context';

const About = () => {
  // const data={
  //   name:"Jyoti Prabha",
  //   image:"https://omnilifegroup.com/wp-content/uploads/2024/05/undraw_Designer_re_5v95-1.png",
  // };

  const {updateAboutPage}= useGlobalContext();

  useEffect(()=>updateAboutPage(),[]);
  return (
    <div>
      <GlobalStyle/>
      <HeroSection />
    </div>
  )
};

export default About;
