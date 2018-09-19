
import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
import {connect} from 'react-redux'
import Counter from "./../components/counter"
import {
    addOne,
	addOneAsync,
	subOne
} from "./../actions/actions"

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<Counter
					value={this.props.value}
					onIncrement={() => this.props.addOne()}
					onDecrement={() => this.props.subOne()}
					onIncrementAsync={() => this.props.addOneAsync()} 
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	value: state.CounterReducer
})
const mapDispatchToProps ={
	addOne,
	addOneAsync,
	subOne
}

export default connect(mapStateToProps,mapDispatchToProps)(App);