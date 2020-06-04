import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
var tiempo;
var sto
class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      isOn: false,
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.getTiempo=this.getTiempo.bind(this)
    tiempo=this.getTiempo
    sto=this.stopTimer
    this.startTimer();
  }
  getTiempo(){
    return this.state.time;
  }
  startTimer() {
    this.setState({
      isOn: true,
      time: this.state.time,
    })
    this.timer = setInterval(() => this.setState({
      time: this.state.time +1,
    }), 1000);
  }
  stopTimer() {
    this.setState({isOn: false})
    clearInterval(this.timer)
  }
  render() {
    return(
      <div className="abajo">
      <div className="temporizador">
        <h3>Timepo: {this.state.time}</h3>
      </div>
      <div className="temporizador">
        <h3>Total minas: 10</h3>
      </div>
      </div>
    )
  }
}
function Square(props) {
  return (
    <button className={props.value} onClick={props.onClick}>
      {props.minas}
    </button>
  );
}
class Board extends React.Component {
  renderSquare(i) {
    return (<Square minas={this.props.minas[i]} value={this.props.squares[i]}
                   onClick={() => this.props.onClick(i)}/>);
  }
  ren(j){
    let arr=Array(0);
    for (let i=j;i<j+9;i++){
      arr.push(this.renderSquare(i));
    }
    return arr;
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.ren(0)}
        </div>
        <div className="board-row">
          {this.ren(9)}
        </div>
        <div className="board-row">
          {this.ren(18)}
        </div>
        <div className="board-row">
          {this.ren(27)}
        </div>
        <div className="board-row">
          {this.ren(36)}
        </div>
        <div className="board-row">
          {this.ren(45)}
        </div>
        <div className="board-row">
          {this.ren(54)}
        </div>
        <div className="board-row">
          {this.ren(63)}
        </div>
        <div className="board-row">
          {this.ren(72)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props){
    super(props);
    this.minas = Array(81).fill('+');
    let max=10;
    for (let i=0;i<max;i++){
      let int = parseInt((Math.random() * 80), 10);
      if(this.minas[int]!='O'){
        this.minas[int] = 'O';
        if(int-10>=0 && (int)%9!=0){
          if(this.minas[int-10]==='O' || this.minas[int-10]===false){
            if(this.minas[int-10]!='O')
            this.minas[int-10]=1;
          }else{
            if(this.minas[int-10]==='+'){this.minas[int-10]=0;}
            this.minas[int-10]=this.minas[int-10]+1;
          }
        }
        if(int-9>=0){
          if(this.minas[int-9]==='O' || this.minas[int-9]===false){
            if(this.minas[int-9]!='O')
            this.minas[int-9]=1;
          }else{
            if(this.minas[int-9]==='+'){this.minas[int-9]=0;}
            this.minas[int-9]=this.minas[int-9]+1;
          }
        }
        if(int-8>=0 && (int+1)%9!=0){
          if(this.minas[int-8]==='O' || this.minas[int-8]===false){
            if(this.minas[int-8]!='O')
            this.minas[int-8]=1;
          }else{
            if(this.minas[int-8]==='+'){this.minas[int-8]=0;}
            this.minas[int-8]=this.minas[int-8]+1;
          }
        }
        if(int-1>=0 && (int)%9!=0){
          if(this.minas[int-1]==='O' || this.minas[int-1]===false){
            if(this.minas[int-1]!='O')
            this.minas[int-1]=1;
          }else{
            if(this.minas[int-1]==='+'){this.minas[int-1]=0;}
            this.minas[int-1]=this.minas[int-1]+1;
          }
        } 

        if(int+1<81 && (int+1)%9!=0){
          if(this.minas[int+1]==='O' || this.minas[int+1]===false){
            if(this.minas[int+1]!='O')
            this.minas[int+1]=1;
          }else{
            if(this.minas[int+1]==='+'){this.minas[int+1]=0;}
            this.minas[int+1]=this.minas[int+1]+1;
          }
        } 
        if(int+8<81  && (int)%9!=0){
          if(this.minas[int+8]==='O' || this.minas[int+8]===false){
            if(this.minas[int+8]!='O')
            this.minas[int+8]=1;
          }else{
            if(this.minas[int+8]==='+'){this.minas[int+8]=0;}
            this.minas[int+8]=this.minas[int+8]+1;
          }
        } 
        if(int+9<81){
          if(this.minas[int+9]==='O' || this.minas[int+9]===false){
            if(this.minas[int+9]!='O')
            this.minas[int+9]=1;
          }else{
            if(this.minas[int+9]==='+'){this.minas[int+9]=0;}
            this.minas[int+9]=this.minas[int+9]+1;
          }
        } 
        if(int+10<81 && (int+1)%9!=0){
          if(this.minas[int+10]==='O' || this.minas[int+10]===false){
            if(this.minas[int+10]!='O')
            this.minas[int+10]=1;
          }else{
            if(this.minas[int+10]==='+'){this.minas[int+10]=0;}
            this.minas[int+10]=this.minas[int+10]+1;
          }
        } 

      }else{
        max=max+1;
      }

    }
    console.log(this.minas);
    this.state = {
      clase: Array(81).fill('oculto'),
      minas: this.minas,
      fin:0,
    };
  }
  handleClick(i) {
    if (this.state.minas[i] === 'O'){
      //juego terminado
      this.setState({
        fin:1,
      });
      return;
    }
    this.destapar(i);

  }
  destapar(i){
    const clase = this.state.clase.slice();
    clase[i] = 'square';

    this.setState({
                    clase: clase,
                  });    

    if(this.state.minas[i] === '+'){
      this.state.minas[i]=false;
        if(i-9>=0 && this.state.minas[i-9]==='+' && clase[i-9] === 'oculto'){
          setTimeout(() => { this.destapar(i-9); }, 100);
          
        }
        if(i-1>=0 && (i)%9!=0 && this.state.minas[i-1]==='+' && clase[i-1] === 'oculto'){
          setTimeout(() => { this.destapar(i-1); }, 100);
        } 

        if(i+1<81 && (i+1)%9!=0 && this.state.minas[i+1]==='+' && clase[i+1] === 'oculto'){
          setTimeout(() => { this.destapar(i+1); }, 100);
        } 
        if(i+9<81 && this.state.minas[i+9]==='+' && clase[i+9] === 'oculto'){
          setTimeout(() => { this.destapar(i+9); }, 100);
        } 
    }
  }
  render() {
    let fin = (this.state.fin == 0) ?
              <Board 
          minas={this.state.minas}
          squares={this.state.clase}
          onClick={(i) => this.handleClick(i)}
        /> : <div><h2>Fin del juego</h2> <h2>Tiempo : {tiempo()}{sto()}</h2></div>
      

    return (
      <div className="game">
        <div className="game-board">
        {fin}
        </div>
        <Timer/>
      </div>
    );
  }
}

function calculateWin(squares) {
  return null;
}

// ========================================

ReactDOM.render(
  <div>
    <Game />
  </div>,
  document.getElementById('root')
);
