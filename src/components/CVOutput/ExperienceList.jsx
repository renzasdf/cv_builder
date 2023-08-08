/* eslint-disable react/prop-types */
export const ExperienceList = ({ data }) => {
  const { company, position, startDate, endDate, location, description } = data;
  return (
    <>
      <div className='experience-list'>
        <div className='col-1'>
          <div className='year'>
            <b>
              {startDate} - {endDate}
            </b>
          </div>
          <div className='location'>{location}</div>
        </div>
        <div className='col-2'>
          <div className='company'>
            <b>{company}</b>
          </div>
          <div className='position'>{position}</div>
          <div className='description'>{description}</div>
        </div>
      </div>
    </>
  );
};
