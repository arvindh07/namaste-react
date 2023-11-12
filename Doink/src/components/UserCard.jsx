import React from "react";
import { GITHUB_USER_URL } from "../utils/constants";

class UserCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
        // console.log(this.props.name + " child constructor");
    }

    async componentDidMount(){
        const data = await fetch(GITHUB_USER_URL + "arvindh07");
        const json = await data.json();
        console.log(json);
        this.setState({
            name: json.name || json.login,
            avatarUrl: json.avatar_url,
            location: json.location
        })
    }

    render() {
        // console.log(this.props.name + " child render");
        const {name, location, avatarUrl} = this.state;
        return (
            <div className="user__card">
                <img src={avatarUrl} alt="" />
                <p className="user__name"><b>Name:</b> {name}</p>
                <p className="user__location"><b>Location:</b> {location || "Chennai"}</p>
                {/* <Dummy name={`${name}`} /> */}
            </div>
        )
    }
}

// class Dummy extends React.Component{
//     constructor(props){
//         super(props);
//         console.log(this.props.name + " grand child constructor");
//     }

//     componentDidMount(){
//         console.log(this.props.name + " grand child did Mount");
//     }

//     render() {
//         console.log(this.props.name + " grand child render");
//         const {name, location} = this.props;
//         return (
//             <div className="user__card">
//                 <h1>dummy class component</h1>
//                 <Dummy2 name={`${name}`} />
//             </div>
//         )
//     }
// }

export default UserCard;