import React, {Component} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components//Scroll'
import ErrorBoundry from "../components/ErrorBoundry";
import './app.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: "",
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
    }

    onSearchChange = (e) => {
        this.setState({searchfield: e.target.value})
    }

    render() {
        const { robots, searchfield } = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        return !robots.length ?
            <h1>Loading...</h1> :
            (
                <div className="tc">
                    <h1>Robots!</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filterRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
    }
}

export default App;
