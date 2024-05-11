import React, { useState, useEffect } from "react";
import { HiMinusCircle } from "react-icons/hi";
import { AppContext } from '../App';
import { useContext } from "react";

const BlogPost = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const { username } = useContext(AppContext);

 useEffect(() => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (storedTasks.length === 0) {
    console.log("Empty array");
  } else {
    setTasks(storedTasks);
  }
}, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.random(),
      text: task,
    };
    setTasks([...tasks, newTask]); 
    setTask(""); 
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="Form">
      <h1 className="title">Skriv ett inlägg</h1>
      <form onSubmit={handleSubmit} className="BlogForm">
        <textarea 
          placeholder="Börja skriva..." 
          value={task} 
          onChange={handleChange}
        />
        <button 
          className="FormButton" 
          type="submit" 
          value="Submit"
        >
          Lägg upp inlägg
        </button>
      </form>

      <h1 className="title">Dina inlägg</h1>
      <div>
        {tasks.map((task) => (
          <div key={task.id}  className="BloggPost">
            <p>Författare: {username}</p>
            <p>{task.text}</p>
            <div>
              <div 
                className="DeleteBtn"
                onClick={() => handleDelete(task.id)}
              >
                <HiMinusCircle /> Radera inlägg
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
