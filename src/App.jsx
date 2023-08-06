import './App.css';
import { CVForm } from './components/CVForm/CVForm';
import { CVOutput } from './components/CVOutput/CVOutput';

function App() {
  return (
    <>
      <div className='grid-container'>
        <CVForm />
        <CVOutput />
      </div>
    </>
  );
}

export default App;
