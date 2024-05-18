import React from 'react'
import GetInTouch from '../components/GetInTouch';
import GetStarted from '../components/GetStarted';
import Header from '../components/Header';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  const location=useLocation()

  return (
    <>
    <Header />
    <GetStarted />
    <GetInTouch />
    </>

  )
}

export default Home