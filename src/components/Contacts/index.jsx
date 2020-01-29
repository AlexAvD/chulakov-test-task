import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Contact from '../Contact'
import classnames from 'classnames'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './index.scss'

const formattingStr = (str) => str.replace(/(^\s+|[^\w ]|_|\s(?=\s)|\s+$)/g, '').toLowerCase();
const hasOnlyLetters = (str) => /^\w+$/.test(str)
const hasOnlyDigits = (str) => /^\d+$/.test(str)

const Contacts = ({ data, view, filter }) => {
  const [ fade, setFade ] = useState(true);
  const contactsContainerEl = useRef(null);
  const contactsClasses = classnames('contacts', {
    'contacts--preview': view === 'preview'
  });

  useEffect(() => {
    setFade(false);
    
    setTimeout(() => {
      setFade(true);
    }, 100);

  }, [view, filter])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      })
    }, {
      root: null,
      rootMargin: '-40% 0px',
      threshold: 0.1
    })

    if (fade) {
      contactsContainerEl.current.querySelectorAll('.video__content').forEach((video) => {
        observer.observe(video);
      })
    }
  }, [fade])

  let contacts = data.sort((a, b) => {
      a = a[filter.sort];
      b = b[filter.sort];
    
      if (filter.sort === 'name') {
        a = a.toLowerCase();
        b = b.toLowerCase();
      } 
    
      if (a > b) {
        return 1;
      } else if (b > a) {
        return -1 
      }
      
      return 0;
  })

  if (filter.order === 'descending') {
    contacts = contacts.reverse();
  }

  if (filter.search) {
    contacts = contacts.filter(contact => {
      const formatedSearch = formattingStr(filter.search);
      const formatedSearchWithoutSpaces = formatedSearch.replace(/\s/g, '');
      let result = false;

      if (hasOnlyDigits(formatedSearchWithoutSpaces)) {
        const phone = formattingStr(contact.phone).replace(/\s/g, '');

        result = phone.indexOf(formatedSearchWithoutSpaces) === 0;
      } else if (hasOnlyLetters(formatedSearchWithoutSpaces)) {
        const name = formattingStr(contact.name).split(' ');

        result = name.some(nameItem => {
          return formatedSearch.split(' ').some(searchItem => {
            return nameItem.indexOf(searchItem) === 0;
          })
        });
      }

      return result;
    })
  }

  contacts = contacts.map((contact, i) => {
    const delay = 100 * i;

    return (
      <CSSTransition 
        timeout={delay}
        exit={false}
        key={contact.id}
      >
        <Contact className="contacts__list-item" {...contact} />
      </CSSTransition>
      
    )
  })

  return (
    <div className={contactsClasses}>
      <ul className="contacts__list" ref={contactsContainerEl}>
        <TransitionGroup 
          component={null}
        >
          {fade ? contacts : null} 
        </TransitionGroup>
      </ul>
    </div>
  )
}

Contacts.propTypes = {
  data: PropTypes.array.isRequired,
  view: PropTypes.string.isRequired,
  filter: PropTypes.object.isRequired
}

Contacts.defaultProps = {
  data: []
}

const mapStateToProps = (state) => ({
  data: state.data,
  view: state.view,
  filter: state.filter
})

export default connect(mapStateToProps)(Contacts)
