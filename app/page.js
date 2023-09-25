'use client';

import PrintMessage from './components/PrintMessage';
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('')

  function changeName(e) {
    const value = e.target.value;
    setName(value)

  }

  return (
    <main>
      <input type="text" value={name} onChange={changeName} />
      <PrintMessage name={name}/>
    </main> 
  )
}
