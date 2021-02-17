import React from 'react';
import Table from './Table';
import Form from './Form';


class App extends React.Component {
    state = {
        characters : [
        ]
    }

    removeCharacter = (index) => {
        const {characters} = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })
    }

    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
    }

    render() {
     
        const {characters} = this.state

      return (
        <div className="container">
            <h1>React</h1>
            <p>Add a user with a name and a job to the table.</p>
            <Table characterData={characters} removeCharacter={this.removeCharacter}/>
            <h3>Add User</h3>
            <Form handleSubmit={this.handleSubmit}/>
        </div>
      )
    }
  }

  export default App