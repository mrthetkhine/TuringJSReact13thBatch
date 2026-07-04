import {withLogger} from "@/app/components/patterns/hoc/WithLoggerHOC";

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
    return (<div>
        Page 1
    </div>);
}
function Page2()
{

    return (<div>
        Page 2
    </div>);
}
function Page3()
{

    return (<div>
        Page 3
    </div>);
}
function withAuth(Component)
{
    return function AuthComponent(props)
    {
        let auth = useAuth();
        if(!auth)
        {
            return <LoginPage />;
        }
        else
        {
            return <Component {...props} />;
        }
    }
}
const AuthPage1 = withAuth(withLogger(Page1));
const AuthPage2 = withAuth(Page2);
export default function WithHOC()
{
    return (<div>
        <AuthPage1/>
        <AuthPage2/>
        <Page1/>
    </div>);
}