import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {

    state = {
        characters: []
    };
    
    removeCharacter = index => {
        const { characters } = this.state;                      // deconstruct 'characters' our of state

        this.setState({                                         // Built in function to manipulate state  
            characters: characters.filter((character, i) => {   // Filtering out the array, and return a new array
                return i !== index;                             // Testing an index vs. all the indices in the array, return all but 
            })
        });
    }

    // Update the state by taking the existing this.state.characters and adding
    // the new character parameter using the ES6 spred operator
    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    
    render() {
        const { characters } = this.state;
        
        return (
            <div className="container">
                <Table 
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}



export default App;