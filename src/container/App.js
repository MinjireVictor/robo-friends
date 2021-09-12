import React, {Component} from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import './App.css';
import Scroll from '../component/Scroll';
import ErrorBoundary from '../component/ErrorBoundary';

class App extends Component{
	constructor(){
		super()
		
		this.state={
			robots: [],
			searchfield:''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.cypress.io/users').then(response=>{
			return response.json();
		})
		.then(users=>{
			this.setState({robots:users})
		});
	}

	onSearchChange=(event)=>{
		this.setState({searchfield:event.target.value})
		console.log(event.target.value);
	}
	
	render(){

		const filteredCards=this.state.robots.filter((robots)=>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})



		if (this.state.robots.length===0) {
			return <h1 className='tc'>Loading</h1>
		}
		else{
			return(
			<div className= 'tc'>
				<h1> Robo Friends </h1>
				< SearchBox onSearchChange={this.onSearchChange}/>
				<ErrorBoundary>
				<Scroll>
					<CardList robots={filteredCards} />
				</Scroll>	
				</ErrorBoundary> 
				
				
			</div>
		);

		}

		
	}

}


export default App;