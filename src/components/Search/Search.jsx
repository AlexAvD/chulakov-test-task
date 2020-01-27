import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Search as SearchIcon } from 'react-feather'
import { translate } from '../../locales'
import './Search.scss'

const Search = ({ language }) => {
  const [ search, setSearch ] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (search) {
      console.log(search);
    }
  }

  const onChange = (e) => {
    setSearch(e.target.value);
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
          value={search}
          type="text" 
          placeholder={translate(language, 'search')} 
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
  language: state.language
})

export default connect(mapStateToProps)(Search)
