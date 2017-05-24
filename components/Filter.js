import React from 'react'

function Filter(props) {
  return (
    <select onChange={props.handleChange} defaultValue='all'>
      <option value='all'>All</option>
      {props.filters.map(filter =>
        <option key={filter} value={filter}>{filter}</option>
      )}
    </select>
  )
}

Filter.defaultProps = {
  filters: [null, 'berry', 'pomme', 'other'],
  handleChange: e => console.log(e)
}

export default Filter
