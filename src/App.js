import React from 'react';

// Components
import Header from './Components/Header/Header';
import Section from './Components/Section/Section';
import Footer from './Components/Footer/Footer'


const App = () => {
  const studentsList = [
    {
      name: 'Barack',
      lastName: 'Obama',
      age: 22,
      id: 1,
    },
    {
      name: 'John',
      lastName: 'Kennedy',
      age: 24,
      id: 2,
    },
    {
      name: 'Elon',
      lastName: 'Musk',
      age: 26,
      id: 3,
    },
  ]
  return (
    <div className='App'>
      <Header />
      <Section studentsList={studentsList}/>
      <Footer />
    </div>
  );
};

export default App;