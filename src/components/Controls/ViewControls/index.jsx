import React from 'react'
import { connect } from 'react-redux';
import { translate } from '../../../locales'
import store from '../../../redux/store'
import { setViewAction } from '../../../redux/actoins/viewActions';
import { 
  List as ListIcon, 
  Layout as LaoutIcon 
} from 'react-feather'
import RadioButton from '../../RadioButton'
import RadioButtonGroup from '../../RadioButtonGroup';
import './index.scss'


const ViewControls = ({ language, view }) => {
  const onChange = (e) => {
    store.dispatch(setViewAction(e.target.value))
  };

  return (
    <div className="controls__view view-controls">
      <fieldset className="controls__fieldset">
        <legend className="view-controls__title controls__title">
          {translate(language, 'view-title')}
        </legend>

        <RadioButtonGroup onChange={onChange} >
          <RadioButton 
            isChecked={view === "table"} 
            value="table"
            name="view"
          >
            <ListIcon className="radio-button__icon" />
            {translate(language, "view-item-table")}
          </RadioButton>

          <RadioButton 
            isChecked={view === "preview"} 
            value="preview"
            name="view"
          >
            <LaoutIcon className="radio-button__icon" /> 
            {translate(language, "view-item-preview")}
            
          </RadioButton>

        </RadioButtonGroup>
      </fieldset>
    </div>
  )
}

const mapStateToProps = (state) => ({
  language: state.language,
  view: state.view
})

export default connect(mapStateToProps)(ViewControls)
