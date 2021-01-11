import React from 'react';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
  	position:'relative',
  	
    background: 'Lavender',
    margin:"2px 2px",
    border: 1,
    borderRadius: 3,
    color: '#233',
    width: 60,
    height: 60,
    fontWeight: 'bold',
    fontSize:"2em"
   
  },
});

const Square = (props) => {
	
	const classes= useStyles();

	return (
		<button className={classes.root} onClick={props.onclick}>{props.letter}</button>
		);

}

export default Square;