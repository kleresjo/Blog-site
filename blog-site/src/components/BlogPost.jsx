import React, { useState } from "react";
import { HiMinusCircle } from "react-icons/hi";

const BlogPost = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

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
    <div>
      <h1>Skriv ett inlägg</h1>
      <form onSubmit={handleSubmit}>
        <textarea placeholder="Börja skriva..." value={task} onChange={handleChange}/>
        <button type="submit" value="Submit">Lägg upp inlägg</button>
      </form>

      <h1>Dina inlägg</h1>
      <div>
        {tasks.map((task) => (
          <div>
            <p>{task.text}</p>
            <div>
            <div onClick={() => handleDelete(task.id)}><HiMinusCircle /> Radera inlägg</div>
          </div>
          </div>
        ))}
      </div>
      <div>
          <div key={task.id}>
            <p><del>{task.text}</del></p>
          </div>
      </div>
    </div>
  );
};

export default BlogPost;
