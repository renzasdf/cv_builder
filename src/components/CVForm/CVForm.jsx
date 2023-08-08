/* eslint-disable react/prop-types */
// import { useState } from 'react';
import { Education } from './Education';
import { Experience } from './Experience';
import { PersonalDetails } from './PersonalDetails';

export const CVForm = ({ onChange, onSave }) => {
  // const [details, setDetails] = useState();
  return (
    <>
      <div className='form-container'>
        <h1 className='title | text-4xl'>CV Builder</h1>
        <PersonalDetails onChange={onChange} />
        <Education onSave={onSave} />
        <Experience onSave={onSave} />
      </div>
    </>
  );
};
