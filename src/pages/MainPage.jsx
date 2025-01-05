import React from 'react'
import NavBar from '../components/NavBar'
import HeroPage from '../components/HeroPage'
import AboutMe from '../components/AboutMe'
import SkillSet from '../components/SkillSet'
import MyProject from '../components/MyProject'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const MainPage = () => {
  return (
    <>
    <NavBar/>
    <HeroPage/>
    <AboutMe />
    <SkillSet />
    <MyProject />
    <ContactForm />
    <Footer />
    </>
  )
}

export default MainPage