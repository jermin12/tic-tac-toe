import React , {Component} from 'react';
import Square from './Square';
import 'tachyons';
import './index.css';
import './Font.ttf';
import tttlogo from './tictactoe.jpg';
import {Box} from '@material-ui/core';




class Game extends Component 
{

 constructor (props)
	 {
	 	super(props);
	 	 this.initialState = {
	 		squares:Array(9).fill(null),
	 		turnX:true,
	 		
	 	};
     this.state = this.initialState;


	 }

  onResetClick(e) {
        e.preventDefault();
        this.setState(this.initialState);
    }


click(i) 
 { 
  
  const squares=this.state.squares.slice();


  if (this.calculatewinner(squares)||squares[i])
  { return; }
  squares[i]=this.state.turnX? 'X':'O';

  this.setState({squares:squares,
    turnX:!this.state.turnX,
  });


  }

createbutton(i) 
{

  return <Square letter={this.state.squares[i]} onclick={()=>this.click(i)} />
}  


calculatewinner(squares)  
{
   const winninglines = [
   [1,2,3],
   [4,5,6],
   [7,8,9],
   [1,5,9],
   [3,5,7],
   [1,4,7],
   [2,5,8],
   [3,6,9],
   ];

   for(let j=0; j<winninglines.length; j++)
   {
    const [a,b,c] = winninglines[j];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){ 
      return squares[a];
    }
    }
    return null;


 }





 render()
{
 
 
   


  let status;
  const winner = this.calculatewinner(this.state.squares);
  
    if (winner) {
      status = 'WINNER :  ' + winner;
        } 
    else 
    {
      status = 'NEXT PLAYER:   ' + (this.state.turnX ? 'X' : 'O');
    }
  
	
    return(
		 
	 <Box className="wrap">

     <img alt="tictactoe" src={tttlogo} style={{display:"block",float:"both",
  margin:"4% auto",
  width:400,height:100,
borderRadius:"25px",
boxShadow:"10px 10px 5px grey"}}></img>
     <div className="flex flexwrap  justify-center">
     {this.createbutton(1)}
     {this.createbutton(2)}
     {this.createbutton(3)}
    </div>

    <div className="flex flexwrap  justify-center">
      {this.createbutton(4)}
      {this.createbutton(5)}
      {this.createbutton(6)}
    </div>

    <div className="flex flexwrap  justify-center">
    {this.createbutton(7)}
    {this.createbutton(8)}
    {this.createbutton(9)}
    </div>

<div className="con">
<div className="status">{status}</div>

 <button className="b1" type="button" onClick={this.onResetClick.bind(this)}>Reset</button>
</div>
  </Box>  
		


	);
}

}
export default Game;