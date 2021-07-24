// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  onUserInput = event => {
    const {value} = event.target
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="main-container">
        <div className="content">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="new-input" className="para">
            Enter the phrase
          </label>
          <input
            type="text"
            placeholder="Enter the phrase"
            className="input"
            onChange={this.onUserInput}
            id="new-input"
          />
          <p className="button">No.of letters: {inputPhrase.length}</p>
        </div>
        <div className="image-content">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="pic"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
