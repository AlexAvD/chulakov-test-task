import React, { useState, useRef } from 'react'
import { translate } from '../../locales'
import RadioButton from '../RadioButton/RadioButton'

const ControlsView = ({ currentLanguage }) => {
  const views = [ 'table', 'preview' ];
  const [ currentView, setCurrentView ] = useState(views[0]);
  const defaultViewEl = useRef(null);

  const onChange = (e) => {
    setCurrentView(e.target.value);
  };

  const radioButtons = views.map(view => {
    return (
      <RadioButton 
        key={view}
        className="controls-view__radio-button" 
        isChecked={currentView === view} 
        onChange={onChange}
        label={translate(currentLanguage, view)}
        value={view}
        name="view" 
        ref={currentView === view ? defaultViewEl : null} 
      />
    );
  });

  return (
    <div className="controls__view controls-view">
      <p className="controls-view__title">
        {translate(currentLanguage, 'view')}
      </p>
      <div className="controls-view__radio-buttons">
        {radioButtons}
      </div>
      <div className="controls-view__underline"></div>
    </div>
  )
}

export default ControlsView
