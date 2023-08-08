/* eslint-disable react/prop-types */
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const Experience = ({ onSave }) => {
  const [experienceDetails, setExperienceDetails] = useState({
    id: uuidv4(),
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    location: '',
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setExperienceDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSave = () => {
    onSave('experience', experienceDetails);
    setExperienceDetails({
      id: uuidv4(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
    });
  };
  return (
    <>
      <div className='experience p-10'>
        <h1 className=' text-4xl font-bold mb-5'>Experience</h1>

        <p className=' font-medium'>Company Name</p>
        <input
          className='rounded-lg p-3 text-sm input-bg'
          type='text'
          placeholder='Company Name'
          name='company'
          onChange={handleChange}
          value={experienceDetails.company}
        />

        <p className='font-medium'>Position Title</p>
        <input
          className='rounded-lg p-3 text-sm input-bg'
          type='text'
          placeholder='Position'
          name='position'
          onChange={handleChange}
          value={experienceDetails.position}
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
              value={experienceDetails.startDate}
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
              value={experienceDetails.endDate}
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
          value={experienceDetails.location}
        />

        <p className='font-medium'>Description</p>
        <textarea
          className='rounded-lg p-3 text-sm input-bg'
          type='text'
          placeholder='Description'
          name='description'
          onChange={handleChange}
          value={experienceDetails.description}
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
