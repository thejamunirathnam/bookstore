import React from 'react'
import DisplayBook from '../components/DisplayBook/DisplayBook'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

function Dashboard() {
  return (
    <div className="container">
      <Header/>
      <DisplayBook/>
      <Footer/>
    </div>
  )
}

export default Dashboard
