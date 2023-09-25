'use client';

import PrintMessage from './components/PrintMessage';
import { useState } from 'react';

export default function Home() {
  const [state, setStage] = useState('matheus');

  function changeName() {
    setStage('Outro Nome')
  }

  return (
    <main>
      <button onClick={changeName}>Trocar</button>
      <PrintMessage name={state}/>
    </main> 
  )
}
