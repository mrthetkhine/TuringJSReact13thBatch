import { selectAuth } from "../features/auth/authSlice";
import { useAppSelector } from "../hooks";

export default function useAuth()
{
    const isAuth = useAppSelector(selectAuth);
    return !!isAuth;
}