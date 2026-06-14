export default function Greeting({message})
{
    console.log('Greeting props ',message);
    return (<div>
        <h3>{message}</h3>
    </div>)
}