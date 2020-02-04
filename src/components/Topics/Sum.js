import React, {Component} from 'react'

class Sum extends Component {

    constructor() {
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    updateNum1(val) {
        this.setState({num1: parseInt(val, 10)})
    }

    updateNum2(val) {
        this.setState({num2: parseInt(val, 10)})
    }

    add(num1, num2) {
        this.setState({sum: num1 + num2})
    }


    render () {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" type="number" onChange={(e) => this.updateNum1(e.target.value)} />
                <input className="inputLine" type="number" onChange={(e) => this.updateNum2(e.target.value)} />
                <button className="confirmationButton" onClick={ () => this.add(this.state.num1, this.state.num2)}>Add 'em up!</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum