import React, { Component } from 'react';
import axios from 'axios';

export default class DeleteGame extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            game_id: this.props.match.params.id,
            game_title: '',
            game_console: '',
        }
        
    }

    componentDidMount() {
        axios.get('http://localhost:4000/games/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    game_title: response.data.game_title,
                    game_console: response.data.game_console,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onSubmit(e) {
        e.preventDefault();
        const game = {
            game_title: this.state.game_title,
            game_console: this.state.game_console,
        };
        console.log(game);
        axios.post('http://localhost:4000/games/delete/'+this.props.match.params.id, game)
            .then(res => console.log(res.data))
            .catch(error => {
                console.log(error.message);
            });

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Delete Game</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Game Title: </label>
                        <input  readOnly
                                type="text"
                                className="form-control"
                                value={this.state.game_title}
                                />
                    </div>
                    <div className="form-group">
                        <label>Game Console: </label>
                        <input readOnly
                                type="text" 
                                className="form-control"
                                value={this.state.game_console}
                                />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="submit" value="Delete Game" className="btn btn-primary" /> 
                    </div>
                </form>
            </div>
        )
    }
}