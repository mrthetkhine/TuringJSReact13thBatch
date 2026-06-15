function Admin()
{
    return(<h1>
        Admin
    </h1>);
}
function User()
{
    return(<h1>
        User
    </h1>)
}
export default function UserProfile({role})
{
    /*if(role == "admin")
    {
        return <Admin/>;
    }
    else if(role=='user')
    {
        return <User/>;
    }
    else
    {
        return null;
    }*/
    let Component ;
    if(role === "admin")
    {
        Component = Admin;
    }
    else {
        Component = User;
    }
    return (<div>
        {
           // role=='admin'?<Admin />:<User/>
            /*
            *Ok so far
            * */
        }
       {/* {
            role === 'admin' && <Admin />
        }
        {
            role === 'user' && <User />
        }
        {
            null
        }*/}
        <Component/>
    </div>);
}