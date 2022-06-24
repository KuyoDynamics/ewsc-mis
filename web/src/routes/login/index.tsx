import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useLoginMutation } from "../../../graphql/generated";

const Login = () => {
  const schema = Yup.object({
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    password: Yup.string()
      .max(255)
      .min(8, "Password must be a minimum of 8 characters")
      .required("Password is required"),
  });

  type FormInputs = {
    email: string;
    password: string;
  };
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid },
    setError,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [login, { loading, data, error }] = useLoginMutation();
  console.log("data", data);
  console.log("loading", loading);
  console.log("error", error);

  const onSubmit = async (values: any) => {
    await login({
      variables: {
        input: {
          email: values.email,
          password: values.password,
        },
      },
      onCompleted: (result) => {
        console.log("Chaiwa, data from server", result);
        if (result.login.__typename === "LoginSuccess") {
          localStorage.setItem("token", result.login.accessToken);
        } else if (result.login.__typename === "ApiLoginError") {
          console.log("Error", result);
          result.login.errors?.forEach((err) =>
            setError(err.field as "email" | "password", {
              type: "server",
              message: err.message,
            })
          );
        }
      },
      onError: (error) => {
        console.log("Chaiwa, something bad happened", error);
      },
    });
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Sign in
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Sign in on the internal platform
              </Typography>
            </Box>
            <Controller
              control={control}
              name="email"
              render={({ field, fieldState: { isTouched, error } }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Email Address"
                  type="email"
                  margin="normal"
                  variant="outlined"
                  error={Boolean(isTouched && error)}
                  helperText={isTouched && error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field, fieldState: { isTouched, error } }) => (
                <TextField
                  {...field}
                  error={Boolean(isTouched && error)}
                  fullWidth
                  helperText={isTouched && error?.message}
                  label="Password"
                  margin="normal"
                  type="password"
                  variant="outlined"
                />
              )}
            />

            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={isSubmitting || !isValid || loading}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                {loading ? "singing you in..." : "Sign In Now"}
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;
