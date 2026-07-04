function Row({name,age})
{
    return (
        <>
            <td>
                {
                    name
                }
            </td>
            <td>
                {age}
            </td>
        </>
        );
}
export default function FragmentDemo()
{
    const items = [
        {
            name :'Jhon',
            age : 30,
        },
        {
            name :'Michael',
            age : 40,
        }
    ]
    return (<div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
            {
                items.map((item, index) =><tr key={index}>
                    <Row name={item.name} age={item.age}/>

                </tr>)
            }
            </tbody>
        </table>
    </div>)
}