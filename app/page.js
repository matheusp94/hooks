'use client';

import PrintMessage from './components/PrintMessage';
import { useState } from 'react';

export default function Home() {
  const state = useState();
  console.log('State = ', state)

  const name = "FIAP";
  return (
    <main>
      <PrintMessage name={name}/>
    </main> 
  )
}
