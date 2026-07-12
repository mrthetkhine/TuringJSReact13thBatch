interface GreetProps{
    message:string;
}
export default function Greet({message}:GreetProps)
{
    return (<div>
        Greet {message.toUpperCase()}
    </div>);
}