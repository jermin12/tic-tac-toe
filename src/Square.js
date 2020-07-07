import React from 'react';

const Square = (props) => {
	
	return (
		<button className="w2 h2" onClick={props.onclick}>{props.letter}</button>
		);

}

export default Square;