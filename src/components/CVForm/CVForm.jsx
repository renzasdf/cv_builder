/* eslint-disable react/prop-types */
// import { useState } from 'react';
import { PersonalDetails } from './PersonalDetails';

export const CVForm = (props) => {
  // const [details, setDetails] = useState();
  return (
    <>
      <div className='form-container'>
        <PersonalDetails onChange={props.onChange} />
      </div>
    </>
  );
};
