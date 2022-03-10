import React from 'react'
import "../../Css/Theme.css";
import DiamondSlider from './DiamondSlider';
import RingBuilderHome from './RingBuilderHome';
import Slider from './Slider';

const Home = () => {
  return (
    <div className='bw-home'>
    <Slider />
    <DiamondSlider />
    <RingBuilderHome />
    </div>
  )
}

export default Home