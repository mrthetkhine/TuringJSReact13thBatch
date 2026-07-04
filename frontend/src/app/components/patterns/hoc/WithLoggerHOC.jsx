import {useEffect} from "react";

function Comp1()
{
    return(<div>
        Component 1
    </div>);
}
function Comp2()
{
    return(<div>
        Component 2
    </div>);
}
export function withLogger(Component)
{
    return function WithLoggerComponent(props)
    {
        useEffect(()=>{
            console.log(Component.name,' rendered initially');
        },[]);
        return (<Component {...props} />);
    }
}
const C1 = withLogger(Comp1);
const C2 = withLogger(Comp2);
export default function WithLoggerHOC()
{
    return (<div>
        <C1/>
        <C2/>
    </div>);
}