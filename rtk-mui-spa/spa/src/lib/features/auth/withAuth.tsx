import useAuth from "@/lib/hooks/useAuth";
import {useRouter} from "next/navigation";
import { usePathname } from 'next/navigation'
export default function withAuth(Component:any)
{
    return function AuthComponent(props:any)
    {
        const path = usePathname();
        const router =useRouter();
        let auth = useAuth();

        if(!auth)
        {
            console.log('Path ',path);
            router.push('/authentication/login?redirectUrl=' + path);
            return null;
        }
        else
        {
            return <Component {...props} />;
        }
    }
}