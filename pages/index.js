import MainHeader from '../components/MainHeader'
import React from 'react'

const Home = () => (
  <div>
    <MainHeader/>
    <h1>Home</h1>
    <style jsx>{`
      h1 {
        text-align: center;
        font: 30px sans-serif;
      }
    `}</style>
  </div>
)

export default Home