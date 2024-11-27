import { Component } from "react";
import UserInfo from "../utils/UserInfoContext";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserInfo: {
        name: "Samir",
        email: "mohdsamir30102001@gmail.com",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/" + "MohdSamir2001");
    const json = await data.json();
    this.setState({
      UserInfo: json,
    });
  }
  render() {
    return (
      <div className="p-10">
        <div className="bg-slate-400 flex justify-between flex-col items-center h-44 w-52 p-2 rounded-md">
          <img
            className="w-16 rounded-lg h-16"
            src={this.state.UserInfo.avatar_url}
            alt=""
          />
          <h2>{this.state.UserInfo.name}</h2>
          <h2>{this.state.UserInfo.login}</h2>
          <h2>{this.state.UserInfo.bio}</h2>
        </div>
        <UserInfo.Consumer>
          {({ setNameInfo, loggedInUser }) => {
            return (
              <div>
                <input
                  value={loggedInUser}
                  onChange={(e) => setNameInfo(e.target.value)}
                  className="w-52 px-2 font-semibold rounded-lg my-4 border-2 border-black"
                  type="text"
                />
                <h3>{loggedInUser}</h3>
              </div>
            );
          }}
        </UserInfo.Consumer>
      </div>
    );
  }
}
export default Contact;
