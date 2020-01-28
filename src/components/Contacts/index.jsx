import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Contact from '../Contact'
import './index.scss'

const Contacts = ({ data, view }) => {
  const contacts = data.map((contact) => (
    <Contact key={contact.id} {...contact} />
  ))

  return (
    <div className={`contacts${(view === 'preview') ? ' contacts--preview' : ''}`}>
      <ul className="contacts__list">
        {contacts}
      </ul>
    </div>
  )
}

Contacts.propTypes = {
  data: PropTypes.array
}

Contacts.defaultProps = {
  data: []
}

const mapStateToProps = (state) => ({
  data: state.data,
  view: state.view
})

export default connect(mapStateToProps)(Contacts)
