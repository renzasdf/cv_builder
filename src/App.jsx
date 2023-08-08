import { useState } from 'react';
import './App.css';
import { CVForm } from './components/CVForm/CVForm';
import { CVOutput } from './components/CVOutput/CVOutput';

function App() {
  const [fullDetails, setFullDetails] = useState({
    personal: {
      fullname: 'Renz Byron Ortiz',
    },
    education: [],
    experience: [],
  });

  const onSave = (key, value) => {
    setFullDetails((prevValue) => {
      return {
        ...prevValue,
        [key]: [...prevValue.education, value],
      };
    });
  };

  const onChange = (key, name, value) => {
    setFullDetails((prevValue) => {
      return {
        ...prevValue,
        [key]: {
          ...prevValue[key],
          [name]: value,
        },
      };
    });
  };

  return (
    <>
      <div className='grid-container'>
        <CVForm onChange={onChange} onSave={onSave} />
        <CVOutput data={fullDetails} />
      </div>
    </>
  );
}

export default App;
