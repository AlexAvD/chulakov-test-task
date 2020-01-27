import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setFavouriteAction } from '../../redux/actoins/dataActions'
import Controls from '../Controls/Controls'
import './Main.scss'

const Main = ({ currentLanguage, data }) => {
  return (
    <main className="main">
      <div className="main__container container">
        <Controls currentLanguage={currentLanguage} />
      </div>
    </main>
  )
}

Main.propTypes = {
  currentLanguage: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  setFavourite: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  currentLanguage: state.language,
  data: state.data
})

const mapDispatchToProps = (dispatch) => ({
  setFavourite: (id) => {
    dispatch(setFavouriteAction(id));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
