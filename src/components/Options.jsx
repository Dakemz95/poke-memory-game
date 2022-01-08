import { useState } from 'react'
import './Options.css'

const Options = ({restartGame, leaveGame}) => {
  const [panelVisibility, setPanelVisibility] = useState(false)
  function togglePanel() {
    setPanelVisibility(!panelVisibility)
  }

  return (
    <div className="container">
      <button className="opt-btn" onClick={togglePanel} data-show={panelVisibility}>
        <svg className='opt-img' width="36px" height="36px" viewBox="0 0 36 36" version="1.1"  preserveAspectRatio="xMidYMid meet">
          <title>cog-solid</title>
          <path className="clr-i-solid clr-i-solid-path-1" d="M32.57,15.72l-3.35-1a11.65,11.65,0,0,0-.95-2.33l1.64-3.07a.61.61,0,0,0-.11-.72L27.41,6.2a.61.61,0,0,0-.72-.11L23.64,7.72a11.62,11.62,0,0,0-2.36-1l-1-3.31A.61.61,0,0,0,19.69,3H16.31a.61.61,0,0,0-.58.43l-1,3.3a11.63,11.63,0,0,0-2.38,1l-3-1.62a.61.61,0,0,0-.72.11L6.2,8.59a.61.61,0,0,0-.11.72l1.62,3a11.63,11.63,0,0,0-1,2.37l-3.31,1a.61.61,0,0,0-.43.58v3.38a.61.61,0,0,0,.43.58l3.33,1a11.62,11.62,0,0,0,1,2.33L6.09,26.69a.61.61,0,0,0,.11.72L8.59,29.8a.61.61,0,0,0,.72.11l3.09-1.65a11.65,11.65,0,0,0,2.3.94l1,3.37a.61.61,0,0,0,.58.43h3.38a.61.61,0,0,0,.58-.43l1-3.38a11.63,11.63,0,0,0,2.28-.94l3.11,1.66a.61.61,0,0,0,.72-.11l2.39-2.39a.61.61,0,0,0,.11-.72l-1.66-3.1a11.63,11.63,0,0,0,.95-2.29l3.37-1a.61.61,0,0,0,.43-.58V16.31A.61.61,0,0,0,32.57,15.72ZM18,23.5A5.5,5.5,0,1,1,23.5,18,5.5,5.5,0,0,1,18,23.5Z"></path>
          <rect x="0" y="0" width="36" height="36" fillOpacity="0"/>
        </svg>
      </button>
      <div className='opt-panel' data-show={panelVisibility} onClick={togglePanel}>
        <ul>
          <li onClick={restartGame}>New game</li>
          <li onClick={leaveGame}>Leave</li>
        </ul>
      </div>
    </div>
  )
}

export default Options
