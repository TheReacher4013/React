import React from 'react';
import Header from './components/header';
import BannerSection from './components/BannerSection';
import KeyFeatures from './components/KeyFeatures';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import SwiperComponent from './components/ui/Swiper';
 
// import circle from './components/ui/circle';


const App = () => {
  return (
    <div className="flex flex-col">
     <Header/>  
     <main className='flex-1 '>
     <BannerSection/>
     <KeyFeatures/>
     <HowItWorks/>
     {/* <Testimonials/> */}
     <SwiperComponent/>
      </main>
    </div>
  );
};

export default App;
