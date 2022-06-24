import React from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Link as MUILink,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Register = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    firstName: Yup.string().max(255).required("First name is required"),
    lastName: Yup.string().max(255).required("Last name is required"),
    password: Yup.string().max(255).required("Password is required"),
    policy: Yup.boolean().oneOf([true], "This field must be checked"),
  });

  interface IDefaultValues {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    policy: boolean | string;
  }

  const defaultValues: IDefaultValues = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    policy: false,
  };

  const onSubmit = (data: any) => console.log(data);

  const {
    handleSubmit,
    control,
    formState: { errors, touchedFields, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
  });

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
                Create a new account
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Use your email to create a new account
              </Typography>
            </Box>
            <Controller
              name="firstName"
              control={control}
              render={({ field, fieldState: { isTouched, error } }) => (
                <TextField
                  {...field}
                  error={Boolean(isTouched && error)}
                  helperText={error?.message}
                  label="First Name"
                  margin="normal"
                  variant="outlined"
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              render={({ field, fieldState: { isTouched, error } }) => (
                <TextField
                  {...field}
                  error={Boolean(isTouched && error)}
                  helperText={error?.message}
                  label="Last Name"
                  margin="normal"
                  variant="outlined"
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState: { isTouched, error } }) => (
                <TextField
                  {...field}
                  error={Boolean(isTouched && error)}
                  helperText={error?.message}
                  label="Email"
                  margin="normal"
                  variant="outlined"
                  type="email"
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState: { isTouched, error } }) => (
                <TextField
                  {...field}
                  error={Boolean(isTouched && error)}
                  helperText={error?.message}
                  label="Password"
                  margin="normal"
                  variant="outlined"
                  type="password"
                />
              )}
            />

            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                ml: -1,
              }}
            >
              <Controller
                name="policy"
                control={control}
                render={({ field }) => <Checkbox {...field} />}
              />
              <Typography color="textSecondary" variant="body2">
                I have read the{" "}
                <Link to="#">
                  <MUILink
                    color="primary"
                    underline="always"
                    variant="subtitle2"
                  >
                    Terms and Conditions
                  </MUILink>
                </Link>
              </Typography>
            </Box>
            {Boolean(touchedFields.policy && errors.policy) && (
              <FormHelperText error>
                {typeof errors.policy === "string" && errors.policy}
              </FormHelperText>
            )}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign Up Now
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              Have an account?{" "}
              <Link to="/login">
                <MUILink variant="subtitle2" underline="hover">
                  Sign In
                </MUILink>
              </Link>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Register;
