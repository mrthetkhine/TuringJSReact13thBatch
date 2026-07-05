import Router from "@/app/components/router/Router";
import Timer from "@/app/components/Timer";
import TodoList from "@/app/components/TodoList";

export default function RouterDemo()
{
    const config= [
        {
            name: 'Home',
            path:'/',
            component:<Timer/>
        },
        {
            name: 'Todo',
            path:'todos',
            component:<TodoList/>
        },
    ];
    return (<Router config={config}/>);
}