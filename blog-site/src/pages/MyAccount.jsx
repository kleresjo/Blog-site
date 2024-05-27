import CreatePost from "../components/CreatePost";
import ReadMyPosts from "../components/ReadMyPosts";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const MyAccount = () => {
    const { currentUser } = useContext(AuthContext);
    return ( 
    <div>
    <h1 className="title">Välkommen {currentUser.email}</h1>
    <h3 className="title">Dina inlägg visas här</h3>
        <div className="gridPost">
    <CreatePost  />
    <ReadMyPosts  />
    </div>
    </div>
    )
}

export default MyAccount;