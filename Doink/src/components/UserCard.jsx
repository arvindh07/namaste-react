import React from "react";
import { GITHUB_USER_URL } from "../utils/constants";
import UserContext from "../utils/context/UserContext";

class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        // console.log(this.props.name + " child constructor");
    }

    async componentDidMount() {
        const data = await fetch(GITHUB_USER_URL + "arvindh07");
        const json = await data.json();
        // console.log(json);
        this.setState({
            name: json.name || json.login,
            avatarUrl: json.avatar_url,
            location: json.location
        })
    }

    render() {
        // console.log(this.props.name + " child render");
        const { name, location, avatarUrl } = this.state;
        return (
            <div className="flex items-center mb-10 border-2 border-orange-400 p-4 rounded-md">
                <img src={avatarUrl} alt="" className="w-20 h-20 rounded-full mr-4"/>
                <div className="w-9/12">
                    <p className="inline-block"><b>Name: </b></p>
                    <UserContext.Consumer>
                        {({loggedInUsername}) => <p className="inline-block pl-1">{loggedInUsername}</p>}
                    </UserContext.Consumer>
                    <p><b>Location:</b> {location || "Chennai"}</p>
                </div>
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