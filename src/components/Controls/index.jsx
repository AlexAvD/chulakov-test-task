import React from 'react'

import ViewControls from './ViewControls'
import FilterControls from './FilterControls'
import './index.scss'

const Controls = () => {
  return (
    <div className="controls">
      <FilterControls />
      <ViewControls />
    </div>
  )
}

export default Controls
