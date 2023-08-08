/* eslint-disable react/prop-types */
export const EducationList = (props) => {
  return (
    <>
      <div className='education-list'>
        <div className='col-1'>
          <div className='year'>
            <b>
              {props.startDate} - {props.endDate}
            </b>
          </div>
          <div className='location'>{props.location}</div>
        </div>
        <div className='col-2'>
          <div className='school'>
            <b>{props.school}</b>
          </div>
          <div className='degree'>{props.degree}</div>
        </div>
      </div>
    </>
  );
};
