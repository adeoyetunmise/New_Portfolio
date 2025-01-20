import React from 'react'
import NavBar from '../components/NavBar'
import HeroPage from '../components/HeroPage'
import AboutMe from '../components/AboutMe'
import SkillSet from '../components/SkillSet'
import MyProject from '../components/MyProject'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import { ThemeProvider } from '../context/ThemeContext.jsx';

const MainPage = () => {
  return (
    <>
    <ThemeProvider>
    <NavBar/>
    <HeroPage/>
    <AboutMe />
    <SkillSet />
    <MyProject />
    <ContactForm />
    <Footer />
    </ThemeProvider>
    </>
  )
}

export default MainPage