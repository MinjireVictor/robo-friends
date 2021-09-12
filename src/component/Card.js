import React from 'react';

const Card=({id, name, email})=>{

	return(
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow6 '>
		<img src={`https://robohash.org/${name}`} alt="photos"/>

		<div>
			<p> {name}</p>
			<p> {email}</p>

		</div>
		</div>
		);
}

export default Card;