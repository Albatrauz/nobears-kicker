import React from "react";
import firebase from "../firebase";

class AddGame extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            match: {
                playerOneName: "",
                playerOneScore: "",
                playerTwoName: "",
                playerTwoScore: "",
                matchID: "",
                matchTime: "",
                winner: "",
            },
        };
    }

    componentDidMount() {
        this.getTotalMatches();
    }

    //Create refs
    playerOneName = React.createRef();
    playerOneScore = React.createRef();
    playerTwoName = React.createRef();
    playerTwoScore = React.createRef();

    getTotalMatches = () => {
        let id = 0;
        const matchesRef = firebase.database().ref("matches").orderByKey();
        matchesRef.once("value").then((match) => {
            match.forEach(() => {
                id++;
            });
            let matchId = id + 1;

            return this.setState({
                match: {
                    //Take a copy of the state set in constructor
                    ...this.state.match,
                    matchID: matchId,
                },
            });
        });
    };

    setGameInState = () => {
        this.setState(
            {
                match: {
                    matchTime: `${Date.now()}`,
                    playerOneName: this.playerOneName.current.value,
                    playerOneScore: this.playerOneScore.current.value,
                    playerTwoName: this.playerTwoName.current.value,
                    playerTwoScore: this.playerTwoScore.current.value,
                    type: "1v1",
                    matchID: this.state.match.matchID,
                    winner: this.state.match.winner,
                },
            },
            () => {
                this.setWinner(this.state.match);
            }
        );
    };

    setWinner = (match) => {
        this.setState(
            {
                match: {
                    ...this.state.match,
                    winner:
                        match.playerOneScore > match.playerTwoScore
                            ? this.state.match.playerOneName
                            : this.state.match.playerTwoName,
                },
            },
            () => {
                this.addGame();
            }
        );
    };

    addGame = () => {
        const match = this.state.match;
        const matchTime = Date.now();
        const matchesRef = firebase.database().ref("matches");
        matchesRef.child(matchTime).set(match);
        this.getTotalMatches();
    };

    render() {
        return (
            <div className="level">
                <div className="container is-fluid level-item">
                    <div className="card">
                        <div className="card-content">
                            <h2 className="heading sign">
                                Wedstrijd toevoegen
                            </h2>
                            <div className="columns">
                                <div className="column">
                                    <label className="label">Speler 1</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Naam"
                                            ref={this.playerOneName}
                                        />
                                    </div>
                                </div>
                                <div className="column">
                                    <label className="label">Score</label>
                                    <div className="control">
                                        <div className="select">
                                            <select ref={this.playerOneScore}>
                                                <option>Selecteer score</option>
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <label className="label">Speler 2</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Naam"
                                            ref={this.playerTwoName}
                                        />
                                    </div>
                                </div>
                                <div className="column">
                                    <label className="label">Score</label>
                                    <div className="control">
                                        <div className="select">
                                            <select ref={this.playerTwoScore}>
                                                <option>Selecteer score</option>
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="winner"></div>
                                {/* <Winner 
                                    winnerName={this.getWinner}
                                />  */}

                                <button
                                    onClick={this.setGameInState}
                                    className="button has-text-secondary is-primary"
                                >
                                    Wedstrijd toevoegen
                                </button>
                                <button
                                    onClick={this.addGame}
                                    className="button has-text-secondary is-primary"
                                >
                                    Wedstrijd opslaan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddGame;