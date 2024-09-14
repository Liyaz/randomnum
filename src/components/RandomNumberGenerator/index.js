// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  randomGen = () => {
    this.setState({
      randomNumber: Math.ceil(Math.random() * 100),
    })
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bgCont">
        <div className="cardCont shadow">
          <h1 className="head">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.randomGen}>
            Generate
          </button>
          <p className="head2">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
