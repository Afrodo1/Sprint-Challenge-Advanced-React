import React from 'react';

import PlayerCard from './playerCards';

export default class Players extends React.Component {
    state ={
        players: [],
        elem: 0
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/players')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            this.setState({...this.state, players: res})
        })
        .catch(err => console.log('RF: Players fetch Error: ', err));
    }

    clickHandler = () =>{
        console.log(this.state.elem);
        this.setState({elem: this.state.elem + 1})
        console.log(this.state.elem);
        if(this.state.elem === this.state.players.length - 1){
            this.setState({elem: 0})
        }
    }
    BackHandler = () =>{
        console.log(this.state.elem);
        this.setState({elem: this.state.elem - 1})
        console.log(this.state.elem);
        if(this.state.elem < 1 ){
            this.setState({elem: 0})
        }
    }
    render(){
        return(
            <div className = 'container'>
                <div className = 'container-container'>
                    {this.state.players.map((player, index) => {
                        if(this.state.elem === index){
                            return (
                            <div>
                                <PlayerCard key = {index} player = {player}/>
                                <button onClick = {this.BackHandler}>Back</button>
                                <button onClick = {this.clickHandler}>Next</button>
                            </div>
                            );
                        }
                    })}
                </div>
            </div>
        )
    }
}