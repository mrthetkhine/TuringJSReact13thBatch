export default function Profile({person})
{
   // const avatar = 'https://react.dev/images/docs/scientists/7vQD0fPs.jpg';
    //const name = 'Gregorio Y. Zara';
   /* const person = {
        name: 'Gregorio Y. Zara',
        theme: {
            backgroundColor: 'black',
            color: 'pink'
        }
    };*/
    let style ={
        backgroundColor: 'black',
        color: 'pink',
        border:'3px solid lightgray',
    }
    return(<div style={style}>
        <h3>
            {person.name}
        </h3>
        <img
            src={person.avatar}
            alt="Katherine Johnson"
        />
    </div>);
}