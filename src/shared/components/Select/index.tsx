import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { FormControl, SelectProps, FormHelperText } from "@mui/material";
import { Field, getIn } from "formik";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
interface ISelect extends SelectProps {
  options: {
    value: string;
    fieldLabel: string;
    isDisabled?: boolean;
  }[];
  getValue?: any;
  fullWidth?: boolean;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
}

function AutoSearch(selectProps: ISelect) {
  const {
    label,
    options,
    id,
    variant,
    size = "small",
    setFieldValue,
    fullWidth = false
  } = selectProps;
  return (
    <Field name={selectProps.name}>
      {({ field, form: { touched, errors, submitCount } }: any) => {
        const error =
          getIn(touched, field.name) || submitCount
            ? getIn(errors, field.name)
            : false;
        return (
          <FormControl
            variant={variant}
            size={size}
            fullWidth={fullWidth}
          >
            <Autocomplete
              fullWidth={fullWidth}
              disableClearable
              id={id}
              options={options}
              onChange={
                (_, newValue) =>
                  setFieldValue(field.name, newValue.value)
              }
              includeInputInList
              onOpen={field.onBlur}
              getOptionLabel={(options) => options.fieldLabel || ""}
              isOptionEqualToValue={(options, value) =>
                options.value === value.value
              }
              popupIcon={<ExpandMoreIcon />}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={label}
                  error={Boolean(error)}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                />
              )}
            />
            <FormHelperText
              id={selectProps.id}
              sx={{
                color: "error.main",
                textAlign: "left",
                m: "0",
              }}
            >
              {error}
            </FormHelperText>
          </FormControl>
        );
      }}
    </Field>
  );
}

export default AutoSearch;