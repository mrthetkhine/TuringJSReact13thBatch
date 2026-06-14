export default function Profile({name,avatar})
{
   // const avatar = 'https://react.dev/images/docs/scientists/7vQD0fPs.jpg';
    //const name = 'Gregorio Y. Zara';
    const person = {
        name: 'Gregorio Y. Zara',
        theme: {
            backgroundColor: 'black',
            color: 'pink'
        }
    };
    let style ={
        backgroundColor: 'black',
        color: 'pink',
        border:'3px solid lightgray',
    }
    return(<div style={person.theme}>
        <h3>
            {name}
        </h3>
        <img
            src={avatar}
            alt="Katherine Johnson"
        />
    </div>);
}