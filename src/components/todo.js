import React, { useEffect } from 'react';

let baseUrl = "fakeapi";

export const Todos = () => {

    useEffect(() => {
        fetch(`/${baseUrl}/getUsers`)
            .then(res => res.json())
            .then(data => console.log('data'.data))
    })

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

    return (
        <div>
            Hello From Todo
            <button onClick= {addTodoHandler}>addTodoHandler</button>
        </div>
    )
}