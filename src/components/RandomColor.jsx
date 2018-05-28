import React, { Fragment } from "react";
import { connect } from "react-redux";
import { randomColor } from "../actions";

class RandomColor extends React.Component {
  render() {
    return (
      <Fragment>
        <h1>GET A RANDOM COLOR !!</h1>
        <button
          onClick={e => {
            this.props.randomColor();
          }}
        >
          Get Random
        </button>
      </Fragment>
    );
  }
}

export default connect(state => ({}), { randomColor })(RandomColor);
