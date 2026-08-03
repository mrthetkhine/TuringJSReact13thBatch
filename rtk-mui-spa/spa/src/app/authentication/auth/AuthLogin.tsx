import React from "react";
import {
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    Button,
    Stack,
    Checkbox,
} from "@mui/material";


import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {AuthFormData, authSchema} from "@/lib/schema/authSchema";
import { useAppDispatch } from "@/lib/hooks";
import { login } from "@/lib/features/auth/authSlice";
import { useRouter } from "next/navigation";

interface loginType {
    title?: string;
    subtitle?: React.ReactNode;
    subtext?: React.ReactNode;
}

const AuthLogin = ({title, subtitle, subtext}: loginType) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
    mode: "onTouched",
  })
  const onSubmit = (data:AuthFormData) => {
    console.log('Auth data',data);
    dispatch(login(data))
        .unwrap()
        .then(response => {
          console.log('Login response ',response);
          router.push('/');
        },error => {
          console.log('Login error ', error);
        });
  }
  const onError = (errors:any) => console.log("Validation Failed:", errors);
  return (<>
    {title ? (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
    ) : null}

    {subtext}

    <Stack>
      <form onSubmit={handleSubmit(onSubmit,onError)} id="subscription-form">
        <Box>

          <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="username"
              mb="5px"

          >
            Username
          </Typography>
          <CustomTextField variant="outlined" fullWidth
                           {...register("username")}
                           error={!!errors.username}
                           helperText={errors.username?.message}
          />
        </Box>
        <Box mt="25px">
          <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="password"
              mb="5px"
          >
            Password
          </Typography>
          <CustomTextField type="password" variant="outlined" fullWidth
                           {...register("password")}
                           error={!!errors.password}
                           helperText={errors.password?.message}/>
        </Box>
        <Stack
            justifyContent="space-between"
            direction="row"
            alignItems="center"
            my={2}
        >
          <Box>
            <Button
                color="primary"
                variant="contained"
                size="large"
                fullWidth
                type="submit"
            >
              Log In
            </Button>
          </Box>
      </Stack>
      </form>
    </Stack>
    {subtitle}
  </>);
}

export default AuthLogin;
