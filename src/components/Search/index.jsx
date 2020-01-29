import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types';
import { translate } from '../../locales'
import { handleLocationSearch } from '../../helpers'
import { setSearchAction } from '../../redux/actoins/filterActions';
import { Search as SearchIcon } from 'react-feather'
import './index.scss'

const Search = ({ language, setSearch }) => {
  const [ currentSearch, setCurrentSearch ] = useState('');
  const history = useHistory();
  const location = useLocation();

  const onSubmit = (e) => {
    e.preventDefault();

    setSearch(currentSearch);
    
    history.push(handleLocationSearch(location.search, { search: currentSearch }));
  }

  const onChange = (e) => {
    setCurrentSearch(e.target.value);
  }

  return (
    <div className="search">
      <form 
        onSubmit={onSubmit}
        className="search__form"
      >
        <input
          onChange={onChange}
          className="search__input"
          value={currentSearch}
          type="text" 
          placeholder={translate(language, 'search-placeholder')} 
          autoComplete="off" 
        />
        <button 
          className="search__submit"
          type="submit"
        >
          <SearchIcon strokeWidth={1.5} />
        </button>
      </form>
    </div>
  )
}

Search.propTypes = {
  language: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
  language: state.language,
})

const mapDispatchToProps = (dispatch) => ({
  setSearch: (search) => dispatch(setSearchAction(search))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
