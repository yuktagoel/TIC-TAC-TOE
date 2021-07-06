
import './App.css';
import Square from "./components/Square";
import { useState,useEffect } from "react";
import {Patterns} from "./Patterns";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", "", ""]);
  const [player,setPlayer]=useState("0");
  const [result,setResult]=useState({winner:"none" , state: "none"});


  useEffect(()=>{
    checkWin();
    checkTie();

  if(player==="X" ){
    setPlayer("0")
  }
    else{
    setPlayer("X")
  }
},[board]); 
 
  
useEffect(()=>{
if(result.state!="none"){
  alert(`game finished! Won by ${result.winner}`);
  restartGame();
}
},[result]);

  const chooseSquare=(square)=>{
    setBoard(
      board.map((val,idx)=>
    {
    if(idx === square && val==="")
    {
      return player;
    }
    return val;
  })
  );
  
};


const checkWin =()=>{
  Patterns.forEach((currPattern) => {
    const firstPlayer= board[currPattern[0]];
    if(firstPlayer=="") return;
    let fountWinningPattern=true;
    currPattern.forEach((idx)=>{
      if(board[idx]!= firstPlayer){
        fountWinningPattern=false;
      }
    });
      if(fountWinningPattern){
      setResult({winner:player,state:"won"});
      }
    });
  };

  const restartGame=()=>{
    setBoard(["", "","", "", "", "", "", "", ""])
    setPlayer("X");
  };
  
const checkTie=()=>{
  let fill=true;
  board.forEach((square)=>{
    if(square===""){
      fill=false;
    }
  });

  if(fill){
    setResult({winner: "no one", state:"tie"});
  }
};
  return (
  <div>
    <div className="container">
    <h1>TIC-TAC-TOE</h1>
    <button onClick={restartGame}>RESTART</button>
    
  </div>
    <div className="App">
    <div className="board">
    <div className="row">
       <Square 
       val={board[0]}
        chooseSquare={()=>{
         chooseSquare(0);
       }}
       />
       <Square 
       val={board[1]}
        chooseSquare={()=>{
         chooseSquare(1);
       }}
       />
       <Square 
       val={board[2]}
        chooseSquare={()=>{
         chooseSquare(2);
       }}
       />
     </div>
     <div className="row">
     <Square 
       val={board[3]}
        chooseSquare={()=>{
         chooseSquare(3);
       }}
       />
       <Square 
       val={board[4]}
        chooseSquare={()=>{
         chooseSquare(4);
       }}
       />
       <Square 
       val={board[5]}
        chooseSquare={()=>{
         chooseSquare(5);
       }}
       />
     </div>
     <div className="row">
     <Square 
       val={board[6]}
        chooseSquare={()=>{
         chooseSquare(6);
       }}
       />
       <Square 
       val={board[7]}
        chooseSquare={()=>{
         chooseSquare(7);
       }}
       />
       <Square 
       val={board[8]}
        chooseSquare={()=>{
         chooseSquare(8);
       }}
       />
     </div> 
    </div>
    </div>
    </div>
  );
}

export default App;


