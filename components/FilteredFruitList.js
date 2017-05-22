import React from 'react'

function FilteredFruitList( props ) {
    const list = !props.filter ? props.fruit :
      props.fruit.filter(i => i.fruit_type == props.filter)

    return (
      <ul className="fruit-list">
        {list.map((i,idx) => <li key={idx}>{i.char}</li>)}
      </ul>
    )
}

FilteredFruitList.defaultProps = {
  filter: null,
  fruit: [
    {
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
    }
  ]
}

export default FilteredFruitList
