import React from "react";
import {
  FormControl,
  FormHelperText,
  Input as StandardInput,
  InputLabel,
  FormControlProps,
  FilledInput,
  OutlinedInput,
  InputProps
} from "@mui/material";
import { Field, getIn } from "formik";

interface IProps extends FormControlProps {
  label: string;
  helpertext?: string;
  validate?: any;
  isRequired?: boolean;
  errorHeight?: boolean;
  name?: string;
  type?: string;
}

function MyInput(props: IProps) {
  const {
    label,
    type,
    variant = "standard",
    errorHeight,
    ...inputProps
  } = props;

  const Input = (props: InputProps) => {
    switch (variant) {
      case "standard":
        return <StandardInput {...props}/>
      case "outlined":
        return <OutlinedInput {...props} label={label} />
      case "filled":
        return <FilledInput {...props}/>
      default:
        return <StandardInput {...props}/>
    }
  }

  return (
    <Field name={props.name}>
      {({ field, form: { touched, errors, submitCount } }: any) => {
        let error = (field.value && getIn(errors, field.name))
          ? getIn(errors, field.name) : "";
        if (!error) {
          error = getIn(touched, field.name) || submitCount
            ? getIn(errors, field.name)
            : false;
        }
        return (
          <>
            <FormControl
              fullWidth
              sx={{ mt: 2, mb: 2 }}
              variant={variant}
            >
              <InputLabel
                htmlFor={props.id}
                focused={true}
                variant={variant}
              >
                {label}
              </InputLabel>
              <Input
                id={props.id}
                {...inputProps}
                type={type}
                onChange={field.onChange}
                onBlur={field.onBlur}
                name={field.name}
                value={field.value}
                error={Boolean(error)}
                {...field}
                sx={{
                  color: "myColors.subColor"
                }}
              />
              <FormHelperText
                id={props.id}
                sx={{
                  color: "error.main"
                }}
              >
                {error}
              </FormHelperText>
            </FormControl>
          </>
        );
      }}
    </Field>
  );
};

export default MyInput;