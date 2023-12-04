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
      <div className='w-10/12 mx-auto'>
        <h1 className='text-2xl font-bold'>About Us</h1>
        <p className='py-4'>This website is used to order your favorite foods using our DOINK🔥🚀</p>
        <UserCard />
        {/* <UserCard name={"Second"} location={"Bengalure, KA"} /> */}
        {/* <UserCard name={"Third"} location={"Bengalure, KA"} /> */}
      </div>
    )
  }
}

export default About