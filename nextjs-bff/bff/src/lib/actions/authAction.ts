'use server';
import {AuthFormData, authSchema} from "@/lib/schema/authSchema";
import {apiLogin} from "@/lib/api/authApi";
import { AuthUser } from "../types";
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
export async function loginAction(authFormData:AuthFormData):Promise<any>
{
    const validateAuthForm = authSchema.safeParse(authFormData);
    console.log('validateMovieForm', validateAuthForm);
    if(validateAuthForm.success)
    {
        let data:any = validateAuthForm.data;
        console.log('Validation Success ',data);
        try {

            let authResponse = await apiLogin(data as AuthUser);
            const cookieStore = await cookies()

            cookieStore.set('auth_token', authResponse.token, {
                httpOnly: true, // Prevents client-side JS from reading the cookie
                secure: process.env.NODE_ENV === 'production', // Requires HTTPS
                sameSite: 'strict', // Controls cross-site request behavior
                path: '/', // Accessible across the whole site
                maxAge: 60 * 60 * 24 * 7 // Valid for 1 week
            })
            redirect('/');
            return authResponse;
        }
        catch(err){
            console.error(err);
            throw err;
        }
    }
    else
    {
        console.log('Error ');
        return validateAuthForm.error;
    }
}
export async function logoutAction()
{
    const cookieStore = await cookies();
    cookieStore.delete('auth_token');
    redirect('/authentication/login');
}