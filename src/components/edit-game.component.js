import React, { Component } from 'react';
import axios from 'axios';

export default class EditGame extends Component {
    constructor(props) {
        super(props);

        this.onChangeGameTitle = this.onChangeGameTitle.bind(this);
        this.onChangeGameConsole = this.onChangeGameConsole.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            game_id: this.props.match.params.id,
            game_title: '',
            game_console: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/games/'+this.state.game_id)
            .then(response => {
                this.setState({
                    game_id: response.data._id,
                    game_title: response.data.game_title,
                    game_console: response.data.game_console,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
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
        const game = {
            game_id: this.state.game_id,
            game_title: this.state.game_title,
            game_console: this.state.game_console,
        };
        console.log(game);
        axios.post('http://localhost:4000/games/update/'+this.props.match.params.id, game)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Game</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Game Title: </label>
                        <input  type="text"
                                className="form-control"
                                defaultValue={this.state.game_title}
                                onChange={this.onChangeGameTitle}
                                />
                    </div>
                    <div className="form-group">
                        <label>Game Console: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                defaultValue={this.state.game_console}
                                onChange={this.onChangeGameConsole}
                                />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="submit" value="Update Game" className="btn btn-primary" /> 
                    </div>
                </form>
            </div>
        )
    }
}