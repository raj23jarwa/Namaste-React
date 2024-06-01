import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="userCard">
        {/* <h1>Count:{this.state.count}</h1> */}
        <h1>Count:{count}</h1>
        <h1>Count2:{count2}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          {" "}
          Increment{" "}
        </button>
        <button
          onClick={() => {
            this.setState({
              count2: this.state.count2 - 1,
            });
          }}
        >
          {" "}
          Decrement{" "}
        </button>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 9518158992</h4>
      </div>
    );
  }
}
export default UserClass;
