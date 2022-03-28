import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';


class App extends Component {
    constructor () {
        super ()
        this.state= {
            robots: [],
            SearchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
           .then(Response=> { return Response.json();
        })
        .then(users => {this.setState({ robots: users})
        })
        
    }

    onSearchChange = (event) => {
        this.setState({SearchField: event.target.value}) 
        console.log(event.target.value)
    } 

    render() {
        const {robots, SearchField}=this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(SearchField.toLowerCase())
        } )

        if (robots.length === 0) {
            return <h1> Loading </h1>
        } else {
            return (
                <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange} />
                <Scroll>
                <CardList robots={filteredRobots}/>
                </Scroll>
                </div> 
            );

        }

        
    }
    
}


export default App; 