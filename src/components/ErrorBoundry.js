import react, {Component} from "react";
import SearchBox from "./SearchBox";
import CardList from "./CardList";
import React from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>OOOPS.Error.</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;
