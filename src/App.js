import { useState } from 'react';
import Classes from './components/Classes';
import AI from './components/AI';
import AIContext from './contexts/AIContext';
import './App.css';

function App() {
  const [numberOfClasses, setNumberOfClasses] = useState(2);

  return (
    <AIContext.Provider value={{ numberOfClasses, setNumberOfClasses }}>
      <div className="App">
        {/* <h1>{numberOfClasses}</h1> */}
        <Classes />
        <div className='ai-container'>
          <AI />
        </div>
      </div>
    </AIContext.Provider>
  );
}

export default App;
