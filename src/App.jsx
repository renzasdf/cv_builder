import { useState } from 'react';
import './App.css';
import { CVForm } from './components/CVForm/CVForm';
import { CVOutput } from './components/CVOutput/CVOutput';
// import { PersonalDetails } from './components/CVForm/PersonalDetails';

function App() {
  const [fullDetails, setFullDetails] = useState({
    personal: {},
    education: [],
    experience: [],
  });

  function onChange(property, name, value) {
    setFullDetails((prevValue) => {
      return {
        ...prevValue,
        [property]: {
          ...prevValue.personal,
          [name]: value,
        },
      };
    });
  }

  return (
    <>
      <div className='grid-container'>
        <CVForm onChange={onChange} />
        <CVOutput details={fullDetails} />
      </div>
    </>
  );
}

export default App;
