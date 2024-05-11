import React, { useContext } from "react";
import BlogPost from '../components/BlogPost';
import { AppContext } from '../App';

const MyAccount = () => {
    const { username } = useContext(AppContext);
    return ( 
    <div>
    <h1 className="title">Välkommen {username}</h1>
    <BlogPost  />
    </div>
    )
}

export default MyAccount;