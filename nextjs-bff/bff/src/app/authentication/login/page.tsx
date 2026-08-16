import LoginPage from "./LoginPage";
import {cookies} from "next/headers";
import { redirect } from "next/navigation";
export default async function Page()
{
    const cookieStore = await cookies();
    let token = cookieStore.get('auth_token');
    let isAuth = !!token;
    console.log('Login page server ',isAuth);
    if(!isAuth){
        return (<LoginPage />);
    }
    else {
        redirect(`/`);
    }

}

