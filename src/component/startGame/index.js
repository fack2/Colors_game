import React, { Component } from "react";
import startImage from "../../images/start2.png";
class StartGame extends Component {
  onChange = event => {
    this.props.setName(event.target.value);
  };
  render() {
    return (
      <>
        <img alt='img colors' src={startImage} />
        <h1>Start Game</h1>
        <form>
          <input
            type='text'
            onChange={this.onChange}
            placeholder='Player Name'
            value={this.props.name}
          />
          <br />
          <button
            className='start'
            type='submit'
            onClick={() => {
              this.props.status(0);
            }}
          >
            Start
          </button>
        </form>
      </>
    );
  }
}
export default StartGame;
