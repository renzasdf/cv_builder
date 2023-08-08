/* eslint-disable react/prop-types */
import './CVOutput.css';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceIcon from '@mui/icons-material/Place';
import { EducationList } from './EducationList';
import { ExperienceList } from './ExperienceList';

export const CVOutput = ({ data }) => {
  const { personal, education, experience } = data;
  const { fullname, email, phone, address } = personal;

  return (
    <>
      <header>
        <div className='name | text-6xl '>{fullname}</div>
        <div className='details | text-lg'>
          <div className='icons'>
            <EmailIcon fontSize='small' />
            <span>{email}</span>
          </div>
          <div className='icons'>
            <LocalPhoneIcon fontSize='small' />
            <span>{phone}</span>
          </div>
          <div className='icons'>
            <PlaceIcon fontSize='small' />
            <span>{address}</span>
          </div>
        </div>
      </header>

      <main className='main-container'>
        <section className='education'>
          <div className='title'>Education</div>
          {education.map((education) => {
            return (
              <EducationList
                key={education.id}
                id={education.id}
                school={education.school}
                degree={education.degree}
                startDate={education.startDate}
                endDate={education.endDate}
                location={education.location}
              />
            );
          })}
        </section>
        <section className='experience'>
          <div className='title'>Experience</div>
          {experience.map((experience) => {
            return (
              <ExperienceList
                key={experience.id}
                id={experience.id}
                data={experience}
              />
            );
          })}
        </section>
      </main>
    </>
  );
};
