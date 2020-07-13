import React, { useState } from 'react';
import style from './style.module.scss'

function App() {
  const [state, setState] = useState(1)
  const increase=()=>setState(draft=>draft+1)
  const decrease=()=>setState(draft=>draft-1)
  return (
    <div className="App">
      <div className={style.value}>{state}</div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
