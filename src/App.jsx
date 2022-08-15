import { useState } from 'react';
import './App.css'
import Question from './Question'
import Qe from './Qe'
import AnsList from './AnsList';

function App() {
  const [dataRanger, setDataRanger] = useState(true);
  const [score, setScore] = useState(0)


  const data = (arr) => {
    if (arr[0] + arr[1] == 4) {
      setDataRanger(false);
      setScore(arr[0]);
    }
  }
  return (
    <>
      <div className="main">
        <div className="fild">
          <div className="ans">
            point
          </div>
          {
            dataRanger ? <Qe fun={data} Question={Question} /> : <AnsList data={score} />
          }
        </div>
      </div>
    </>
  )
}

export default App
