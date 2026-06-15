'use client';

function TodoItem({todo}) {
    const onClickHandler = (e)=>{
        console.log('clicked ',e);
        console.log('todo ',todo);
    }

    return <div>
        {todo.title}
        <button type="button" onClick={onClickHandler}> Edit</button>
    </div>;
}

export default function ListDemo()
{
    const todos = [
        {
            id : 1,
            title: 'Task 1'
        },
        {
            id : 2,
            title: 'Task 2'
        },
        {
            id : 3,
            title: 'Task 3'
        },
    ];
    console.log('Todo ',TodoItem({todo:{id:3,title:'Three'}}));
    return (<div>
        {
            todos.map(todo=><TodoItem
                key={todo.id}
                todo={todo}/>)
        }
    </div>);
}