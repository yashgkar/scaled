import React, { useState } from "react";
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  InputProps,
  InputAdornment,
  IconButton
} from "@mui/material";
import { Field, getIn } from "formik";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface IProps extends InputProps {
  label: string;
  helpertext?: string;
  validate?: any;
  isRequired?: boolean;
  errorHeight?: boolean;
  name?: string;
  type?: string;
  variant?: "filled" | "outlined" | "standard";
}

function MyInput(props: IProps) {
  const {
    label,
    type,
    variant = "standard",
    errorHeight,
    ...inputProps
  } = props;
  const [showPassword, setShowPassword] = useState(false);

  const getType = () => {
    if (type === "password") {
      if (showPassword) {
        return "text";
      }
      return "password";
    }
    return type;
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Field name={props.name}>
      {({ field, form: { touched, errors, submitCount } }: any) => {
        let error = (field.value
          && getIn(errors, field.name))
          ? getIn(errors, field.name) : "";
        if (!error) {
          error = getIn(touched, field.name) || submitCount
            ? getIn(errors, field.name)
            : false;
        }
        return (
          <FormControl
            fullWidth sx={{
              mt: "1rem",
              mb: 1
            }}
            variant={variant}
          >
            {label.length ?
              <InputLabel
                htmlFor={props.id}
                focused={true}
                shrink={true}
              >
                {label}
              </InputLabel>
              : null}
            <Input
              {...inputProps}
              type={getType()}
              endAdornment={
                (type === "password") && (
                  <InputAdornment
                    position="end"
                  >
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      sx={{ m: 0, transform: "translateY(-4px)" }}
                    >
                      {showPassword
                        ? <Visibility />
                        : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }
              onChange={field.onChange}
              onBlur={field.onBlur}
              name={field.name}
              value={field.value}
              error={Boolean(error)}
              {...field}
            />
            <FormHelperText
              id={props.id}
              sx={{
                color: "error.main",
                minHeight: errorHeight ? "19px" : "auto"
              }}
            >
              {error}
            </FormHelperText>
          </FormControl>
        );
      }}
    </Field>
  );
};

export default MyInput;