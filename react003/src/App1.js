import React, { useState } from 'react'
import { render } from 'react-dom';

const App = () => {

  const [countState, setCountState] = useState({
    count: 0,
    message: 'Hello'
  })

  countState.handleIncrement= () => {
    setCountState({ ...countState, count: countState.count + 1 })
  }

  countState.handleDecrement = () => {
    setCountState({ ...countState, count: countState.count - 1 })
  }

  countState.handleReset = () => {
    setCountState({ ...countState, count: 0 })
  }

  state = {
    count: 0,
  }

  handleBtnClick = event => {
    const x = parseInt(event.target.value)
    this.setState({ count: this.state.count + x })
  }

  handleResetCount = () => {
    this.setState({ count: 0 })
  }

  render() {
    return (
      <>
        <h1>{countState.message}</h1>
        <h1>Count: {countState.count}</h1>
        <button onClick={countState.handleIncrement}>+</button>
        <button onClick={countState.handleDecrement}>-</button>
        <button onClick={countState.handleReset}>RESET</button>

        <h1>Count: {this.state.count}</h1>
          <button onClick={this.handleBtnClick} value={1}>1</button>
          <button onClick={this.handleBtnClick} value={2}>2</button>
          <button onClick={this.handleBtnClick} value={3}>3</button>
          <button onClick={this.handleBtnClick} value={4}>4</button>
          <button onClick={this.handleBtnClick} value={5}>5</button>
          <button onClick={this.handleResetCount}>RESET</button>
      </>
    )
  }
}

export default App