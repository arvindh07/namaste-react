import { createContext, useState } from "react";

// hooks can be called only inside the component🚀
// const [name, setName] = useState("Default user");
const UserContext = createContext({
    loggedInUsername: "default user"
})

export default UserContext;