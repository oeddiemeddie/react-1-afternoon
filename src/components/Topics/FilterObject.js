import React, {Component} from 'react'

class FilterObject extends Component {

    constructor() {
        super()
        
        this.state = {
            dinosaurs: [ 
                {dinosaur: 'Tyrannosaurus',
                ferociousness: 95}, 
                {Brachiosaurus: 15}, 
                {Dilophosaurus: 70}, 
                {Velociraptor: 99} 
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    filterEmployees(prop) {
        this.setState()
    }

    render () {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"></span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => { this.filterEmployees(this.state.userInput) }}>Filter</button> // update onClick
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredEmployees, null, 10)}</span> //what's in stringify()?
            </div>
        )
    }
}

export default FilterObject