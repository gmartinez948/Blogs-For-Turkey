import { useEffect } from "react";
import { Box, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios({
      method: "post",
      url: "http://localhost:80/createUser",
      data: {
        username: data.Username,
        password: data.Password,
        email: data.Email,
      },
    })
      .then((response) => console.log(response))
      .catch((error) => error);
  };

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
