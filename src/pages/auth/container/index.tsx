import { Button, Stack, Typography, Box } from "@mui/material";
import { Formik, Form } from "formik";

import LoginContainer from "./index.styles";
import Input from "../../../shared/components/Input";
import Select from "../../../shared/components/Select";
import Checkbox from "../../../shared/components/Checkbox";

function Login() {
  return (
    <LoginContainer>
      <Box>
        <Formik
          initialValues={{
            name: "",
            gender: "",
            salaried: ""
          }}
          onSubmit={(values) => { console.log(values); }}
        >
          {({ setFieldValue }) => (
            <Form>
              <Typography>
                Login Container
              </Typography>
              <Stack direction="column">
                <Input
                  label="Name"
                  name="name"
                />
                <Select
                  label="Gender"
                  name="gender"
                  options={[
                    {
                      value: "m",
                      fieldLabel: "Male"
                    },
                    {
                      value: "f",
                      fieldLabel: "Female"
                    }
                  ]}
                  setFieldValue={setFieldValue}
                  fullWidth={true}
                  variant="standard"
                />
                <Checkbox
                  name="salaried"
                  label="Salaried"
                  labelPlacement="end"
                />
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </LoginContainer>
  );
}

export default Login;