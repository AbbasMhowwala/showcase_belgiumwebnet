import React from 'react'
import "../../Css/Theme.css";
import Collection from './Collection';
import Diamond from './Diamond';
import DiamondSlider from './DiamondSlider';
import RingBuilderHome from './RingBuilderHome';
import Slider from './Slider';

const Home = () => {
  return (
    <div className='bw-home'>
    <Slider />
    <DiamondSlider />
    <RingBuilderHome />
    <Collection />
    <Diamond />
    </div>
  )
}

export default Home