
import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';


import './app.css';

class App extends Component {
    constructor(props) {
        super (props);
        this.state = {
            data : [
                {name: "John C.", salary: 900, increase: false, rise: true, id: 1},
                {name: "Bill M.", salary: 1500, increase: true, rise: false, id: 2},
                {name: "Mary T.", salary: 1100, increase: false, rise: false, id: 3}
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addNewItem = (name, salary) => {
        const newItem = {name: name, salary: salary, increase: false, rise: false, id: this.maxId++}
        this.setState(({data}) => {
            const newData = [...data, newItem]
            return {
                data: newData
            }
        })
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            
        })
    }

    onToggleRise = (id) => {
        console.log(`Rise this ${id}`)
    }

    render() {
        return (
            <div className="app">
               <AppInfo />
    
               <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
               </div>
    
               <EmployersList 
               data={this.state.data}
               onDelete={this.deleteItem}
               onToggleIncrease={this.onToggleIncrease}
               onToggleRise={this.onToggleRise}
               />
                <EmployersAddForm 
                onAddNewItem={this.addNewItem}/>
            </div>
        )
    }
}


export default App;