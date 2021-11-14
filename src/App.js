import html2canvas from 'html2canvas'
import React, { useState } from 'react'

const App = () => {
  const [linea1, setLinea1] = useState('')
  const [linea2, setLinea2] = useState('')
  const [imagen, setImagen] = useState('fire')

  const handleExport = () => {
    html2canvas(document.querySelector('#capture')).then((canvas) => {
      let image = canvas.toDataURL('image/png')
      let link = document.createElement('a')
      link.download = 'meme.png'
      link.href = image
      link.click()
    })
  }

  return (
    <div className="app">
      <div className="app_controls">
        <select onChange={(e) => setImagen(e.target.value)}>
          <option value="fire">Fire house</option>
          <option value="futurama">Futurama</option>
          <option value="history">History channel</option>
          <option value="matrix">Matrix</option>
          <option value="philosoraptor">Philosoraptor</option>
          <option value="smart">Smart guy</option>
        </select>
        <input
          type="text"
          placeholder="linea 1"
          maxLength={20}
          value={linea1}
          onChange={(e) => setLinea1(e.target.value)}
        />
        <input
          type="text"
          placeholder="linea 2"
          maxLength={20}
          value={linea2}
          onChange={(e) => setLinea2(e.target.value)}
        />
        <button onClick={handleExport}>Exportar</button>
      </div>
      <div id="capture" className="container_meme">
        <span className="sentence_one">{linea1}</span>
        <span className="sentence_two">{linea2}</span>
        <img src={`/images/${imagen}.jpg`} alt="icon-meme" />
      </div>
    </div>
  )
}

export default App
