import React from 'react'
import './LanguageBar.css';

const LanguageBar = () => {
  return (
    <div className="language-container">
        <div className="language-info flex items-center">
            <p>Javascript</p>
            <span>90%</span>
        </div>
        <div className="horizontal-bar w-full border border-solid border-black">
            <div className="color-fill bg-yellow-200 w-3/4 h-2"></div>
        </div>
    </div> 
  )
}

export default LanguageBar
