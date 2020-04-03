import React from 'react';
import firebase from '../firebase';
import Match from '../components/Match';

class App extends React.Component {

  state = {
    matches: {

    }
  }

  matches = () => {
    this.props.history.push(`/wedstrijden`);
  }

  participants = () => {
    this.props.history.push(`/deelnemers`);
  }
  addGame = () => {
    this.props.history.push(`/toevoegen`);
  }

  getMatches = () => {
    const ref = firebase.database().ref('matches').limitToLast(10);
    ref.once("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            let childData = childSnapshot.val();
            console.log(childData);
        });
    });
  }

  render() {
    return (
        <section className="section">
            <h1>NoBears Kickers</h1>
            <div className="container matches">
              <button onClick={this.getMatches}>Klik</button>
            </div>
            <div className="buttons sign">
                <button
                    onClick={this.matches}
                    className="button has-text-secondary is-primary"
                >
                    Wedstrijden
                </button>
                {/* <button
                    onClick={this.participants}
                    className="button has-text-secondary is-primary"
                >
                    Deelnemers
                </button> */}
                <button
                    onClick={this.addGame}
                    className="button has-text-secondary is-primary"
                >
                    Toevoegen
                </button>
            </div>
        </section>
    );
  }

}

export default App;
