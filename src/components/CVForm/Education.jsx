import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

/* eslint-disable react/prop-types */
export const Education = ({ onSave }) => {
  const [educationDetails, setEducationDetails] = useState({
    id: uuidv4(),
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEducationDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSave = () => {
    onSave('education', educationDetails);
    setEducationDetails({
      id: uuidv4(),
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: '',
    });
  };

  return (
    <>
      <div className='education p-10'>
        <h1 className=' text-4xl font-bold mb-5'>Education</h1>

        <p className=' font-medium'>School</p>
        <input
          className='rounded-lg p-3 text-sm input-bg'
          type='text'
          placeholder='School'
          name='school'
          onChange={handleChange}
          value={educationDetails.school}
        />

        <p className='font-medium'>Degree</p>
        <input
          className='rounded-lg p-3 text-sm input-bg'
          type='text'
          placeholder='Degree'
          name='degree'
          onChange={handleChange}
          value={educationDetails.degree}
        />

        <div className='date'>
          <div className='start'>
            <p className='font-medium'>Start Date</p>
            <input
              className='rounded-lg p-3 text-sm input-bg'
              type='text'
              placeholder='Start Date'
              name='startDate'
              onChange={handleChange}
              value={educationDetails.startDate}
            />
          </div>
          <div className='end'>
            <p className='font-medium'>End Date</p>
            <input
              className='rounded-lg p-3 text-sm input-bg'
              type='text'
              placeholder='End Date'
              name='endDate'
              onChange={handleChange}
              value={educationDetails.endDate}
            />
          </div>
        </div>
        <p className='font-medium'>Location</p>
        <input
          className='rounded-lg p-3 text-sm input-bg'
          type='text'
          placeholder='Location'
          name='location'
          onChange={handleChange}
          value={educationDetails.location}
        />
        <div className='buttons'>
          <button className='add-btn' onClick={handleSave}>
            ADD
          </button>
        </div>
      </div>
    </>
  );
};
