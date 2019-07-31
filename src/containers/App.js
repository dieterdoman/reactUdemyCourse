import React, {Component} from 'react';
import styles from './App.module.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
    state = {
        persons: [
            {id: '1', name: 'Name1', age: 10},
            {id: '2', name: 'Name2', age: 13},
            {id: '3', name: 'Name3', age: 16}
        ],
        showPersons: false
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    nameChangedHandler = (event, id) => {
        const newName = event.target.value;
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id
        });
        const updatedPerson = {
            ...this.state.persons[personIndex]
        };
        updatedPerson.name = newName;
        const persons = [...this.state.persons];
        persons[personIndex] = updatedPerson;
        this.setState({persons: persons});
    };

    togglePersonsHandler = () => {
        const currentState = this.state.showPersons;
        this.setState({showPersons: !currentState})
    };

    render() {
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler}/>
            );

        }
        return (
            <div className={styles.App}>
                <Cockpit persons={this.state.persons} showPersons={this.state.showPersons} clicked={this.togglePersonsHandler}/>
                {persons}
            </div>
        );
    }
}

export default App;