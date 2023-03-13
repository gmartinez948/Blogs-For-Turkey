import * as React from "react";
import { Box, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Username"
          {...register("Username", { required: true, maxLength: 20 })}
        />
        <input
          placeholder="Password"
          {...register("Password", { required: true, pattern: /^[A-Za-z]+$/i })}
        />
        <input placeholder="Email" {...register("Email", { required: true })} />
        <input type="submit" />
        {errors.exampleRequired && <span>This field is required</span>}
      </form>
    </Box>
  );
};

export default LoginForm;
