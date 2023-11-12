import React from 'react';
import UserCard from "./UserCard";

class About extends React.Component {
  constructor(props) {
    // console.log("parent constructor");
    super(props);
  }

  componentDidMount() {
    // console.log("parent did Mount");
  }

  render() {
    // console.log("parent render");
    return (
      <div className='container about'>
        <h1>About Us</h1>
        <p>This website is used to order your favorite foods using our DOINK🔥🚀</p>
        <UserCard />
        {/* <UserCard name={"Second"} location={"Bengalure, KA"} /> */}
        {/* <UserCard name={"Third"} location={"Bengalure, KA"} /> */}
      </div>
    )
  }
}

export default About