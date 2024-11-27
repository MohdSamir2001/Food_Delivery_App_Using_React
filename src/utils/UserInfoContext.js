import { createContext } from "react";

const UserInfo = createContext({
  loggedInUser: "S",
});

export default UserInfo;

// const {setNameInfo} = useContext(userInfo)
