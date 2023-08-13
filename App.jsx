import { useState } from 'react'
import './App.css'

function App() {
  const [angka1, setangka1] = useState(0)
  const [angka2, setangka2] = useState(0)
  const hasil = angka1 + angka2

  return (
    <>
      <div className="card">
        <input type="number" name="1" id="angka1" className="number" onChange={e => setangka1(Number(e.target.value))} />
        <br />
        <input type="number" name="2" id="angka2" className="number" onChange={e => setangka2(Number(e.target.value))} />
        <p>Hasil : {hasil}</p>
      </div>
    </>
  )
}

export default App
