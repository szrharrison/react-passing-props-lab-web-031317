import React from 'react'

import Filter from './Filter'
import FilteredFruitList from './FilteredFruitList.js'

function FruitBasket(props) {
  return (
    <div className="fruit-basket">
      <Filter
        handleChange={props.updateFilterCallback}
        filters={props.filters}
      />
      <FilteredFruitList
        filter={props.currentFilter}
        fruit={props.fruit}
      />
    </div>
  )
}

FruitBasket.defaultProps = {
  fruit: [{
    char: "🍊",
    fitzpatrick_scale: false,
    fruit_type: "citrus",
    keywords: ["food", "fruit", "nature", "orange"],
    name: "tangerine"
  },
  {
    char: "🍐",
    fitzpatrick_scale: false,
    fruit_type: "pome",
    keywords: ["food", "fruit", "nature"],
    name: "pear"
  }],
  filters: [null, 'berry', 'pomme', 'other'],
  currentFilter: null,
  updateFilterCallback: e => console.log(e)
}

export default FruitBasket
