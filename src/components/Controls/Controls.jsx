import React from 'react'
import RadioButton from '../RadioButton/RadioButton';
import ControlsView from './ControlsView';

const Controls = ({ currentLanguage }) => {
  const fields = [ 'id', 'name', 'age' ];
  const sortings = [ 'ascending', 'descending' ];

  return (
    <div className="controls">
      <div className="controls__filter controls-filter">
        <div className="controls-filter__fields">

        </div>

        <div className="controls-filter__sortings">

        </div>
      </div>

      <ControlsView currentLanguage={currentLanguage} />
    </div>
  )
}

export default Controls
