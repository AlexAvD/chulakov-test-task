import React from 'react'
import { connect } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { translate } from '../../../locales';
import { setSortAction, setOrderAction } from '../../../redux/actoins/filterActions'
import { handleLocationSearch } from '../../../helpers'
import RadioButton from '../../RadioButton';
import RadioButtonGroup from '../../RadioButtonGroup';
import './index.scss'


const mapStateToProps = (state) => ({
  language: state.language,
  filter: state.filter
})

const mapDispatchToFilterSortProps = (dispatch) => ({
  setSort: (sort) => dispatch(setSortAction(sort))
})

const FilterSort = connect(mapStateToProps, mapDispatchToFilterSortProps)(({ language, filter, setSort }) => {
  const sorts = [ 'id', 'name', 'age' ]; 
  const history = useHistory();
  const location = useLocation();

  const onChange = (e) => {
    setSort(e.target.value);

    history.push(handleLocationSearch(location.search, { sort: e.target.value }));
  };

  const radioButtons = sorts.map((sort) => {
    return <RadioButton 
      key={sort}
      isChecked={filter.sort === sort} 
      value={sort}
      name="sort" 
    > 
      {translate(language, `filter-sort-field-${sort}`)}
    </RadioButton>
  });
  
  return (
    <div className="filter-controls__sort">
      <fieldset className="controls__fieldset">
        <legend className="controls__title">
          {translate(language, 'filter-sort-title')}
        </legend>
        
        <RadioButtonGroup onChange={onChange} >
          {radioButtons}
        </RadioButtonGroup>
      </fieldset>
    </div>
  )
})

const mapDispatchToFilterOrderProps = (dispatch) => ({
  setOrder: (order) => dispatch(setOrderAction(order))
})

const FilterOrder = connect(mapStateToProps, mapDispatchToFilterOrderProps)(({ language, filter, setOrder }) => {
  const history = useHistory();
  const location = useLocation();

  const onChange = (e) => {
    setOrder(e.target.value);

    history.push(handleLocationSearch(location.search, { order: e.target.value }));
  };

  return (
    <div className="filter-controls__order">
      <fieldset className="controls__fieldset">
        <legend className="controls__title">
          {translate(language, 'filter-order-title')}
        </legend>

        <RadioButtonGroup onChange={onChange} >
          <RadioButton 
            isChecked={filter.order === "ascending"} 
            value="ascending"
            name="order" 
          >
            {translate(language, "filter-order-ascending")}
          </RadioButton>

          <RadioButton 
            isChecked={filter.order === "descending"} 
            value="descending"
            name="order" 
          >
            {translate(language, "filter-order-descending")}
          </RadioButton>
        </RadioButtonGroup>
      </fieldset>
    </div>
  ) 
})

const FilterControls = () => {
  return (
    <div className="controls__filter filter-controls">
      <FilterSort />
      <FilterOrder /> 
    </div>
  )
}

export default FilterControls
