import React, { useEffect } from 'react';

let baseUrl = "fakeapi";

export const Todos = () => {

    useEffect(() => {
        fetch(`/${baseUrl}/getTodos`)
            .then(res => res.json())
            .then(data => console.log('data'.data))
    })

    return (
        <div>
            Hello From Todo
        </div>
    )
}