import React from 'react'
import NavBar from '../components/NavBar'
import CardLists from "../components/CardLists"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

const Home:React.FC = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <CardLists title={'Blockbuster Movie'} category="popular" />   
      <CardLists title={'Only On Netflix'} category="top_rated" />   
      <CardLists title={'Upcoming'} category="upcoming" />    
      <CardLists title={'Top Picks For You'} category="" /> 
      <Footer /> 
    </>
  )
}

export default Home