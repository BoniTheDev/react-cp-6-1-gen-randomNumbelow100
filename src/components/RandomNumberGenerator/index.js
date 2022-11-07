// Write your code here

import './index.css'

import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onGetRandomNumber = () => {
    const genRandomNum = Math.ceil(Math.random() * 100, 1)

    this.setState({randomNumber: genRandomNum})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">Random Number</h1>
          <p className="random-para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            onClick={this.onGetRandomNumber}
            type="button"
          >
            Generate
          </button>
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
