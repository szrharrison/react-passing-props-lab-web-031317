import React, { Component } from 'react'

import FruitBasket from './FruitBasket'

class App extends Component {
  constructor() {
    super()

    this.state = {
      fruit: [],
      filters: [],
      selectedFilter: null
    }
  }
  componentWillMount() {
    this.fetchFilters()
    this.fetchFruit()
  }

  fetchFruit() {
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ fruit: fruit}))
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters} ) )
  }

  handleFilterChange(e) {
    console.log('new filter: ', e.target.value)
    if(e.target.value) {
      this.setState({
        selectedFilter: e.target.value
      })
    } else {
      this.setState({
        selectedFilter: null
      })
    }
  }

  render() {
    return (
      <div>
        <FruitBasket
          filters={this.state.filters}
          updateFilterCallback={this.handleFilterChange.bind(this)}
          currentFilter={this.state.selectedFilter}
          fruit={this.state.fruit}
        />
      </div>
    )
  }
}

export default App
