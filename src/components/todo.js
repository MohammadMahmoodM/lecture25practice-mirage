import React, { useState} from 'react';

let baseUrl = "fakeapi";

export const Todos = () => {

    let [data, setData] = useState([]);

    const addTodoHandler = () => {
        fetch(`/${baseUrl}/addTodo`,{
            method: "POST",
            body: {id: 32, text: "text"}
        }).then(res =>{
            console.log("success", res)
        }).catch(error =>{
            console.log("error addtodo",error)
        })
    }

    const getDatahandler = () => {
        fetch(`/${baseUrl}/getTodos`)
            .then(res => res.json())
            .then(data => {
                setData(data.todos)
                console.log('data'.data)})
    }

    return (
        <div>
            Hello From Todo
            <button onClick= {addTodoHandler}>addTodoHandler</button>
            <button onClick={getDatahandler}>get Todos</button>
            {
                JSON.stringify(data)
            }
        </div>
    )
}