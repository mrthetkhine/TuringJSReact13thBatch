function useAuth()
{
    return true;//is authenticate
}
function LoginPage()
{
    return (<div>
        <h3>Login Page</h3>
    </div>);
}
function Page1()
{
    let auth = useAuth();
    if(!auth)
    {
        return <LoginPage />;
    }
    return (<div>
        Page 1
    </div>);
}
function Page2()
{
    let auth = useAuth();
    if(!auth)
    {
        return <LoginPage />;
    }
    return (<div>
        Page 2
    </div>);
}
function Page3()
{
    let auth = useAuth();
    if(!auth)
    {
        return <LoginPage />;
    }
    return (<div>
        Page 3
    </div>);
}
export default function WhyHocDemo() {
    return(<div>
        <Page1></Page1>
        <Page2></Page2>
        <Page3></Page3>
    </div>);
}
