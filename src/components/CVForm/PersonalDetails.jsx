/* eslint-disable react/prop-types */
import { useState } from 'react';

export const PersonalDetails = ({ onChange }) => {
  const [personalDetails, setPersonalDetails] = useState({
    fullname: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPersonalDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });

    onChange('personal', name, value);
  };

  return (
    <>
      <div className='personal-details p-10'>
        <h1 className=' text-4xl font-bold mb-5'>Personal Details</h1>

        <p className=' font-medium'>Full name</p>
        <input
          className='rounded-lg p-3 text-sm input-bg'
          type='text'
          placeholder='Full name'
          name='fullname'
          value={personalDetails.fullname}
          onChange={handleChange}
        />

        <p className='font-medium'>Email</p>
        <input
          className='rounded-lg p-3 text-sm input-bg'
          type='email'
          placeholder='Email'
          name='email'
          value={personalDetails.email}
          onChange={handleChange}
        />

        <p className='font-medium'>Phone</p>
        <input
          className='rounded-lg p-3 text-sm input-bg'
          type='tel'
          placeholder='Phone number'
          name='phone'
          value={personalDetails.phone}
          onChange={handleChange}
        />

        <p className='font-medium'>Address</p>
        <input
          className='rounded-lg p-3 text-sm input-bg'
          type='text'
          placeholder='Address'
          name='address'
          value={personalDetails.address}
          onChange={handleChange}
        />
      </div>
    </>
  );
};
