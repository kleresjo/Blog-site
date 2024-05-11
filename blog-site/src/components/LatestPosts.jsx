import { AppContext } from "../App";
import { useContext } from "react";

const LatestPosts = () => {
const { username2, username } = useContext(AppContext);
    
const staticArray = [
<div>
<h4>Titel</h4>
<p>Lorem ipsum</p>
<p>Författare: {username2}</p>
<button>Läs mer</button>
</div>
, <div>
<h4>Titel</h4>
<p>Lorem ipsum</p>
<p>Författare: {username}</p>
<button>Läs mer</button>
</div>
, <div>
<h4>Titel</h4>
<p>Lorem ipsum</p>
<p>Författare: {username2}</p>
<button>Läs mer</button>
</div>];


    return (
<div className="PostArray">
        {staticArray.map((item, index) => (
          <div className="ArrayPost" key={index}>{item}</div>
          ))}
    </div>
    )
};

export default LatestPosts;