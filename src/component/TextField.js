import { TextField, Typography } from "@mui/material";
import { useField, ErrorMessage } from "formik";
const TextFields = ({ lable, type, ...props }) => {
  const [field, meta] = useField(props);
  console.log(meta.touched);

  return (
    <TextField
      type={type}
      fullWidth
      error={meta.touched && meta.error}
      // value={formik.values.email}
      variant="outlined"
      label={lable}
      name={field?.name}
      {...props}
      {...field}
      // onBlur={formik.handleBlur}
      onChange={field.onChange}
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
          {<ErrorMessage name={field?.name} />}
          {/* {formik?.errors?.email} */}
        </Typography>
      }

      // value="email"
    />
  );
};
export default TextFields;
