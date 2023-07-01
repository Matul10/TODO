export const addTodo =(data)=>{
    return{
        type: 'add_todo',
        payload: {
            id: new Date().getTime().toString(),
            data : data,
            checked: false
        }
    }
}

export const deleteTodo =(id)=>{
    return {
        type: 'delete_todo',
        payload:{
            id:id,
        }
    }
}

export const updateTodo =(id,chk)=>{
    return{
        type: 'update_todo',
        payload: {
            id: id,
            checked: chk
        }
    }
}