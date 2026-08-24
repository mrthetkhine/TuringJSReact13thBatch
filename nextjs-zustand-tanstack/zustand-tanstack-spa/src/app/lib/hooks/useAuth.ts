import {useBoundStore} from '@/app/stores/useBoundStore';

export default function useAuth()
{
    const {token} =useBoundStore();
    return !!token;
}