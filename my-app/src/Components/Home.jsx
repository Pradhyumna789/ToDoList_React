import React, { useState } from 'react';
import Task from './Task'

const Home = () => {

    const [tasks, setTasks] = useState([1, 2, 3, 4]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        setTasks([...tasks], {title, description});
    };

    return (

        <div className="container">
            <h1>TODO LIST</h1>

            <form onSubmit={submitHandler}>
                <input 
                    type="text" 
                    id="title" 
                    placeholder="Title Here"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea 
                    id="description" 
                    placeholder="Description Here"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} 
                    required>
                </textarea>
                <button type="submit">ADD</button>
            </form>

            {tasks.map((item, index) => (
                <Task key={index} title={item.title} description={item.description}/>
            ))} 

        </div>
    );
};

export default Home;
