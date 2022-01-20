import React, { Component } from "react";
import { connect } from "react-redux";
import { addHistory, ClearHistory } from "./actions";

class App extends Component {
  addTrack() {
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = "";
  }
  ClearTrack() {
    this.props.delTrack();
  }

  render() {
    console.log(this.props.testStore);
    return (
      <div>
        <input
          type="text"
          ref={(input) => {
            this.trackInput = input;
          }}
        />
        <button onClick={this.addTrack.bind(this)}>Add history</button>
        <button onClick={this.ClearTrack.bind(this)}>Clear history</button>
        {this.props.testStore.map((history, index) => (
          <li key={index}>{history}</li>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  testStore: state,
});

const mapDispatchToProps = (dispatch) => ({
  onAddTrack: (text) => {
    console.log(text);
    dispatch(addHistory(text));
  },
  delTrack: () => {
    console.log();
    dispatch(ClearHistory());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
