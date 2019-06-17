import React, { Component } from 'react';
import axios from 'axios';


export default class CreateGame extends Component {

    constructor(props) {
        super(props);

        this.onChangeGameTitle = this.onChangeGameTitle.bind(this);
        this.onChangeGameConsole = this.onChangeGameConsole.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            game_title: '',
            game_console: ''
        }
    }

    onChangeGameTitle(e) {
        this.setState({
            game_title: e.target.value
        });
    }

    onChangeGameConsole(e) {
        this.setState({
            game_console: e.target.value
        });
    }

    onSubmit(e) {       
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Game Title: ${this.state.game_title}`);
        console.log(`Game Console: ${this.state.game_console}`);
        
        const newGame = {
            game_title: this.state.game_title,
            game_console: this.state.game_console
        }

        axios.post('http://localhost:4000/games/add', newGame)
            .then(res => {console.log(res.data)});

        this.setState({
            game_title: '',
            game_console: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Favorite Game</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Game Title: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.game_title}
                                onChange={this.onChangeGameTitle}
                                />
                    </div>
                    <div className="form-group">
                        <label>Game Console: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.game_console}
                                onChange={this.onChangeGameConsole}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Game" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}