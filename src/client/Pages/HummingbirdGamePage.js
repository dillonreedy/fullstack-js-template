import React from "react";
import ReactImage from '../react.png';


export default class HummingbirdGamePage extends React.Component {
  title = 'Humming Bird'; 
  state = { username: null };
  
  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;

    return (
      <div>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}