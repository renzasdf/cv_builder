/* eslint-disable react/prop-types */
import './CVOutput.css';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceIcon from '@mui/icons-material/Place';

export const CVOutput = (props) => {
  const { personal } = props.details;
  const { fullname, email, phone, address } = personal;

  return (
    <>
      <header className=' bg-slate-500 text-white'>
        <div className='name | text-6xl '>{fullname}</div>
        <div className='details | text-md'>
          <div>
            <EmailIcon fontSize='small' />
            <span>{email}</span>
          </div>
          <div>
            <LocalPhoneIcon fontSize='small' />
            <span>{phone}</span>
          </div>
          <div>
            <PlaceIcon fontSize='small' />
            <span>{address}</span>
          </div>
        </div>
      </header>
      <main className=''></main>
    </>
  );
};
