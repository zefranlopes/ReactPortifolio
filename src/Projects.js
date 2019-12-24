import React, {Component} from 'react';
import PROJECTS from './data/projects';

class Projects extends Component{

	render(){
		return (
			<div>
				<h2>HIGH</h2>
				{
					PROJECTS.map(PROJECTS => {
						return (
							
							<Project key={PROJECTS.id} project={PROJECTS}/>
						)
					})
				}
			</div>
		)
	}
}

class Project extends Component{
	render(){
		console.log('PROPS', this.props);

		const {title, image, desciption, link} = this.props.project;

		// const title = this.props.project.title;
		// const image = this.props.project.image;
		// const desciption = this.props.project.desciption;
		// const link = this.props.project.link;

		return (
			<div style={{ display: 'inline-block', width: 300, margin: 10}}>
			
				{this.props.project.title}

				<h3>{title}</h3>
				<img src={image} alt='profile' style={{width: 200, height: 120}}></img>
				<p>{desciption}</p>
				<a href={link}>LINK</a>
			</div>
		)
	}
}

export default Projects; 
