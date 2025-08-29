import React from 'react';
import Header from './components/header';
import BannerSection from './components/BannerSection';
// import circle from './components/ui/circle';


const App = () => {
  return (
    <div className="flex flex-col">
     <Header/>  
     <main className='flex-1 max-w-[90%] mx-auto '>
     <BannerSection/>
      </main>
    </div>
  );
};

export default App;
