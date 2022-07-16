import React from 'react'
import Banner from '../components/Banner/Banner'
import CoinsTable from '../components/CoinsTable'
import Navbar from '../components/Navbar'
import Current  from '../components/Current'
import News1 from './News1'




const Homepage = () => {
    return (
        <>
        <Navbar/>
        <Banner/>
        <Current/>
        <CoinsTable/>
        
        </>
    )
}

export default Homepage
