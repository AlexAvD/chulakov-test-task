import React from 'react'
import Controls from '../Controls'
import Contacts from '../Contacts'
import './index.scss'

const Main = () => {
  return (
    <main className="main">
      <div className="main__container container">
        <Controls />
        <Contacts />
      </div>
    </main>
  )
}

/* 
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
}) */

export default Main
