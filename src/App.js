import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Container,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Grid,
  Button,
  TextField,
  Typography
} from "@mui/material";

export default function App() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      select: ""
    },
    validationSchema: Yup.object({
      email: Yup.string()
        // .max(5, "Muset be less than 50")
        .email("email is invalid.")
        .required("This is require field."),
      select: Yup.string().required("Required.")
    }),
    onSubmit: (value) => {
      console.log(value);
    }
  });
  console.log(formik?.touched);
  return (
    <Container>
      <Grid container component="form" onSubmit={formik.handelForm}>
        <Grid item xs={12}>
          <Typography variant="h6" component="div" align="center">
            Sign in
          </Typography>
        </Grid>
        <Grid item xs={12}>
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
      </Grid>
    </Container>
  );
}
