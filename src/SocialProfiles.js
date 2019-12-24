import React, {Component} from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';


class SocialProfiles extends Component {
	render() {
		return (
			<div>
				<h2>CONNECT</h2>
				<div>
					{
						SOCIAL_PROFILES.map(SOCIAL_PROFILES => {
							return <SocialProfile 
									key={SOCIAL_PROFILES.id} 
									SocialProfile={SOCIAL_PROFILES}
									/>
						})
					}
				</div>
			</div>
		)
	}
}

class SocialProfile extends Component{
	render(){
		const {link, image} = this.props.SocialProfile;
		return (
			<div>
				<a href={link}> <img src={image} alt='profile' style={{width: 120, height: 120}} /></a>
			</div>
		)
	}
}


export default SocialProfiles;