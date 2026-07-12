import {Button, Input, TextField} from "@mui/material";
import Link from "next/link";
import {useForm,Controller} from "react-hook-form";

import {zodResolver} from "@hookform/resolvers/zod";
import {LoginFormData, loginSchema} from "@/app/schema/loginSchema";

export default function FormDemo()
{
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    })
    const onSubmit = (data:LoginFormData) => console.log('login data',data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <TextField
                    label="Username"
                    fullWidth
                    margin="normal"
                    {...register("username")}
                    error={!!errors.username}
                    helperText={errors.username?.message}
                />

            </div>

            <div>
                <TextField
                    label="Password"
                    fullWidth
                    type="password"
                    margin="normal"
                    {...register("password")}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />
            </div>
            <div>
                <Button type="submit" variant={"contained"}>
                    Login
                </Button>
            </div>


        </form>
    )
}