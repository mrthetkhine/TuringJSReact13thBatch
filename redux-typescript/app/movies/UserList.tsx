import Link from "next/link";
async function delay(ms: number)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function getUsers()
{
    await delay(4000);
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await response.json();
    return users;
}
export default async function UserList()
{
    let users=await getUsers();
    console.log('user ',users);
    return(<div>
        {
            users.map((m:any)=><div key={m.id}>

                <Link href={`/movies/${m.id}`}>{m.name}</Link>
            </div>)
        }
    </div>);
}