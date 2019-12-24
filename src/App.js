import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';


// class RegularClass {}
// class ComponentClass extends Component {}

// const regularClass = new RegularClass();
// const componentClass = new ComponentClass();

// console.log(regularClass);
// console.log(componentClass);

class App extends Component {

	state = {displayBio: false};

	// constructor(){
	// 	super();
	// 	this.state = { displayBio: false };

	// 	console.log('COMPONENT', this);

	// 	// this.readMore = () => {
	// 	// 	this.setState({displayBio: true});	
	// 	// }

	// 	// this.readMore = this.readMore.bind(this);
	// 	// this.showLess = this.showLess.bind(this);

	// 	this.toogleDisplayBio = this.toogleDisplayBio.bind(this);

	// 	//this.toogleDisplayBio = () => { ... };
		
	// }


	readMore(){
		//this.state.displayBio = true;
		this.setState({displayBio: true});
		console.log('COMPONENT', this);
	}

	showLess(){
		this.setState({displayBio: false});
		console.log('COMPONENT', this);		
	}

	toogleDisplayBio = () => {
		this.setState({ displayBio: !this.state.displayBio})
		//this.state.displayBio = !this.state.displayBio;
	}

	render(){
		return (
			<div>
				<img src={profile} alt='profile' class="profile"/>

				<h1>ZE</h1>
				<p>LEARN</p>
				<p>REACT</p>

				{this.state.displayBio
					?
						(
							<div>
								<p>TESTING</p>
								<button onClick={this.toogleDisplayBio}>LESS</button>
							</div>
						)
					:
						<button onClick={this.toogleDisplayBio}>MORE</button>
				}

				<hr/>

				
				<Projects />	

				<SocialProfiles />

			</div>

				

		)
	}
}

export default App;