import React, { useState } from 'react'
import { connect } from 'react-redux'
import { translate } from '../../../locales';
import RadioButton from '../../RadioButton';
import RadioButtonGroup from '../../RadioButtonGroup';
import './index.scss'

const mapStateToProps = (state) => ({
  currentLanguage: state.language
})

const FilterFields = connect(mapStateToProps)(({ currentLanguage }) => {
  const fields = [ 'id', 'name', 'age' ];
  const [ currentField, setCurrentField ] = useState(fields[0]); 

  const onChange = (e) => {
    setCurrentField(e.target.value);
  };

  const radioButtons = fields.map((field) => {
    return <RadioButton 
      key={field}
      isChecked={currentField === field} 
      value={field}
      name="fields" 
    > 
      {translate(currentLanguage, `filter-sort-field-${field}`)}
    </RadioButton>
  });
  
  return (
    <div className="filter-controls__sort">
      <fieldset className="controls__fieldset">
        <legend className="controls__title">
          {translate(currentLanguage, 'filter-sort-title')}
        </legend>
        
        <RadioButtonGroup onChange={onChange} >
          {radioButtons}
        </RadioButtonGroup>
      </fieldset>
    </div>
  )
})


const FilterOrder = connect(mapStateToProps)(({ currentLanguage }) => {
  const [ currentOrder, setCurrentOrder ] = useState("ascending"); 

  const onChange = (e) => {
    setCurrentOrder(e.target.value);
  };

  return (
    <div className="filter-controls__order">
      <fieldset className="controls__fieldset">
        <legend className="controls__title">
          {translate(currentLanguage, 'filter-order-title')}
        </legend>

        <RadioButtonGroup onChange={onChange} >
          <RadioButton 
            isChecked={currentOrder === "ascending"} 
            value="ascending"
            name="order" 
          >
            {translate(currentLanguage, "filter-order-ascending")}
          </RadioButton>

          <RadioButton 
            isChecked={currentOrder === "descending"} 
            value="descending"
            name="order" 
          >
            {translate(currentLanguage, "filter-order-descending")}
          </RadioButton>
        </RadioButtonGroup>
      </fieldset>
    </div>
  ) 
})

const FilterControls = () => {
  return (
    <div className="controls__filter filter-controls">
      <FilterFields />
      <FilterOrder /> 
    </div>
  )
}

export default FilterControls
