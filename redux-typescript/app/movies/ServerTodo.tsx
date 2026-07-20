export default async function ServerTodo(){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let todo = await response.json();
    return (<div>
        <div>Title
            {
                todo?.title
            }
        </div>
    </div>);
}