import {
  Checkbox as CheckboxInput,
  FormControl,
  FormControlLabel
} from "@mui/material";
import { Field, getIn } from "formik";

const Checkbox = (props: {
  name: string;
  label: string;
  labelPlacement?: "start" | "top" | "bottom" | "end";
}) => {
  const {
    name,
    label,
    labelPlacement,
  } = props;
  return <Field name={name}>
    {({ field, form: { touched, errors, submitCount } }: any) => {
      let error = (field.value
        && getIn(errors, field.name))
        ? getIn(errors, field.name) : "";
      if (!error) {
        error = getIn(touched, field.name) || submitCount
          ? getIn(errors, field.name)
          : false;
      }
      return (<FormControl component="fieldset">
        <FormControlLabel
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          name={field.name}
          control={<CheckboxInput />}
          label={label}
          labelPlacement={labelPlacement}
        />
      </FormControl>);
    }}
  </Field>;
};

export default Checkbox;