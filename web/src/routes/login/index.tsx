import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Login = () => {
  const onSubmit = (data: any) => console.log(data);

  const schema = Yup.object({
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    password: Yup.string().max(255).required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, touchedFields, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

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
          <Link to="/">
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Dashboard
            </Button>
          </Link>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Sign in
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Sign in on the internal platform
              </Typography>
            </Box>
            <TextField
              {...register("email")}
              error={Boolean(touchedFields.email && errors.email)}
              fullWidth
              helperText={touchedFields.email && errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              //   onBlur={formik.handleBlur}
              //   onChange={formik.handleChange}
              type="email"
              value={getValues().email}
              variant="outlined"
            />
            <TextField
              {...register("password")}
              error={Boolean(touchedFields.password && errors.password)}
              fullWidth
              helperText={touchedFields.password && errors.password}
              label="Password"
              margin="normal"
              name="password"
              //   onBlur={formik.handleBlur}
              //   onChange={formik.handleChange}
              type="password"
              value={getValues().password}
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign In Now
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              Don&apos;t have an account?{" "}
              <Link to="/register">
                <Link
                  to="/register"
                  //   variant="subtitle2"
                  //   underline="hover"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  Sign Up
                </Link>
              </Link>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;
