import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
      userInfo:{}
    };
    // console.log(this.props.name+" child constructor")
  }
  async componentDidMount(){
    // console.log(this.props.name + "Child component did mount")
    // API Call
    const data =await fetch("https://api.github.com/users/raj23jarwa")
    const json=await data.json();
    console.log(json)
    this.setState({
        userInfo:json
    })
  }
  render() {
    // console.log(this.props.name +" child render")
    // const { name, location } = this.props;
    // const { count, count2 } = this.state;
    const {name,location,bio}=this.state.userInfo;
    return (
      <div className="userCard">
       
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Bio: {bio}</h4>
      </div>
    );
  }
}
export default UserClass;
