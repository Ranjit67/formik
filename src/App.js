import { Formik } from "formik";
import * as Yup from "yup";
import { Container, Grid, Button, Typography } from "@mui/material";
import TextFields from "./component/TextField";

export default function App() {
  const validate = Yup.object({
    firstName: Yup.string()
      .required("First name is required.")
      .max(5, "Name should be less than 5."),
    lastName: Yup.string()
      .required("Last name is required.")
      .max(5, "Name should be less than 5."),
    email: Yup.string().required("Email is required.").email("Email formated."),
    password: Yup.string()
      .required("Password is required.")
      .max(5, "Name should be less than 5."),
    confirmPassword: Yup.string()
      .required("Confirm Password is required.")
      .oneOf([Yup.ref("password"), null], "Password not metch.")
      .max(5, "Name should be less than 5.")
  });
  return (
    <Container>
      <Grid container component="form">
        <Grid item xs={12}>
          <Typography variant="h6" component="div" align="center">
            Sign in
          </Typography>
        </Grid>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
          }}
          validationSchema={validate}
        >
          {(fomik) => {
            return (
              <div
                style={{
                  width: "100%"
                }}
              >
                {console.log(fomik.values)}
                <TextFields
                  type="text"
                  // value
                  lable="First Name"
                  name="firstName"
                />
                <TextFields
                  type="text"
                  // value
                  lable="Last Name"
                  name="lastName"
                />
                <TextFields
                  type="text"
                  // value
                  lable="Email"
                  name="email"
                />
                <TextFields
                  type="password"
                  // value
                  lable="Password"
                  name="password"
                />
                <TextFields
                  type="password"
                  // value
                  lable="Confirm Password"
                  name="confirmPassword"
                />

                <Button variant="contained" color="secondary" fullWidth>
                  Submit
                </Button>
              </div>
            );
          }}
        </Formik>
        {/* <Grid item xs={12}>
          <TextField
            type="text"
            fullWidth
            value={formik.values.email}
            variant="outlined"
            label="email"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            margin="normal"
            helperText={
              <Typography
                align="right"
                style={{
                  color: "red"
                  // backgroundColor:"blue"
                }}
                component="div"
                variant="subtitle2"
              >
                {formik?.errors?.email}
              </Typography>
            }

            // value="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="password"
            name="password"
            fullWidth
            value={formik.values.password}
            onChange={formik.handleChange}
            // value=
            variant="outlined"
            label="password"
            margin="normal"
            // helperText={formik?.errors?.email }
            // value="email"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <Button
            fullWidth
            margin="normal"
            type="submit"
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
        </Grid>
      */}
      </Grid>
    </Container>
  );
}
