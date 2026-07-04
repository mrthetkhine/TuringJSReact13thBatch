import { z } from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";

export const signupSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters long"),
    email: z.string().email("Please provide a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
});
export default function SignupForm()
{
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: zodResolver(signupSchema)
    });
    console.log('errors ',errors);
    const onSubmit = data => console.log('form data ',data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Username</label>
                <input {...register("username")} />
                <p>{errors.username?.message}</p>
            </div>

            <div>
                <label>Email</label>
                <input {...register("email")}  />
                <p>{errors.email?.message}</p>
            </div>
            <div>
                <label>Password</label>
                <input {...register("password")} type={"password"} />
                <p>{errors.password?.message}</p>
            </div>

            <input type="submit" />
        </form>
    );
}