import React, { Fragment } from "react";
import { connect } from "react-redux";

class Color extends React.Component {
  render() {
    return (
      <Fragment>
        {this.props.color.map(item => {
          return (
            <div
              key={item}
              style={{
                width: "5rem",
                height: "5rem",
                display: "inline-block",
                backgroundColor: item
              }}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default connect(state => ({
  color: state.color
}))(Color);
