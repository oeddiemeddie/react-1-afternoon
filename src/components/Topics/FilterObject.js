import React, {Component} from 'react'

class FilterObject extends Component {

    constructor() {
        super()
        
        this.state = {
            unFilteredArray: [ 
                {
                    dinosaur: 'Tyrannosaurus',
                    ferociousness: 95,
                    name: 'Rex',
                    home: 'Isla Nublar'
                }, 
                {
                    dinosaur: 'Brachiosaurus',
                    ferociousness: 15,
                    name: 'Candy Cane',
                    diet: 'greens'
                }, 
                {
                    dinosaur: 'Dilophosaurus',
                    ferociousness: 70,
                    name: 'Billy',
                    home: 'Isla Sorna'
                }, 
                {
                    dinosaur: "Velociraptor",
                    ferociousness: 99,
                    diet: 'hubris'
                } 
            ],

            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    filteredArray(prop) {
        let unFilteredArray = this.state.unFilteredArray
        let filteredArray = []
        for ( let i = 0; i < unFilteredArray.length; i++) {
            if ( unFilteredArray[i].hasOwnProperty(prop)) {
                filteredArray.push(unFilteredArray[i])
            }
        }

        this.setState({filteredArray: filteredArray})
    }

    render () {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original Array: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } />
                <button className="confirmationButton" onClick={ () => { this.filteredArray(this.state.userInput) }}>Filter</button> 
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span> 
            </div>
        )
    }
}

export default FilterObject
