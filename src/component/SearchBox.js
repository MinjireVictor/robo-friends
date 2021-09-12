import React from 'react'


const SearchBox=({onSearchChange})=>{

	return(

		<div  className='pa3 ba b--green bg-lightest-blue'>
		<input 
			type='search'
			placeholder='search friends'
			onChange={onSearchChange}

		/>

		</div>

		

		);
}

export default SearchBox;