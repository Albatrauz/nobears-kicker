import React from 'react';
// import AddGame from "./AddGame";

class Winner extends React.Component {
    
    winnerfunc = () => {
        console.log(this.props.getWinner);
    }
    render(){
        return <div>{this.winnerfunc}</div>
        
        
    }
}
export default Winner;
