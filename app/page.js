import PrintMessage from './components/PrintMessage';



export default function Home() {
  const name = "FIAP";
  return (
    <main>
      <PrintMessage name={name}/>
    </main>
    
  )
}
