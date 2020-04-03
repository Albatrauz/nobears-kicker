import React from 'react';


class Match extends React.Component {

    render() {
        return (
            <div>
                {Object.keys(this.props.matches).map(key => (
                    <div>
                        <h1>test</h1>
                    </div>
                ))}
                <button onClick={this.props.matches}>Klik</button>
            </div>
        );
    }
}

export default Match