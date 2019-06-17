import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Game = props => (
    <tr>
        <td>{props.game.game_title}</td>
        <td>{props.game.game_console}</td>
        <td>
            <Link to={"/edit/"+props.game._id}>Edit</Link>
        </td>
        <td>
            <Link to={"/delete/"+props.game._id}>Delete</Link>
        </td>
    </tr>
)

export default class GamesList extends Component {

    constructor(props) {
        super(props)
        this.state = {games: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/games/')
            .then(response => {
                this.setState({ games: response.data });
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    gameList() {
        return this.state.games.map(function(currentGame, i){
            return <Game game={currentGame} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Favorite Games List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Game Title</th>
                            <th>Game Console</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.gameList() }
                    </tbody>
                </table>
            </div>
        )
    }
}