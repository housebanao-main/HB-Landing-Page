import React from 'react';
import Home from '../components/Home';
import Provide from '../components/Provide';
import Glimpse from '../components/Glimpse';
import Intro from '../components/Intro';
import TableSection from '../components/TableSection';
import Service from '../components/Service';
import Innovation from '../components/Innovation';
import Header from '../components/Header';

export const  HomePage = ()=> {
  return (
    <div className="App">
      <Header />
      <Home />
      <Provide />
      <div className='mt-4'><Glimpse /></div>
      <Intro />
      <TableSection />
      <Service />
      <Innovation />
    </div>

  );
}


