import React from 'react';
import Header from './components/header';
import BannerSection from './components/BannerSection';
import KeyFeatures from './components/KeyFeatures';
 
// import circle from './components/ui/circle';


const App = () => {
  return (
    <div className="flex flex-col">
     <Header/>  
     <main className='flex-1 '>
     <BannerSection/>
     <KeyFeatures/>
      </main>
    </div>
  );
};

export default App;
