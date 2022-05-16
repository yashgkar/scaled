import { Button, Stack, Typography, Box } from "@mui/material";
import { Formik, Form } from "formik";

import LoginContainer from "./index.styles";
import Input from "../../../shared/components/Input";
import Checkbox from "../../../shared/components/Checkbox";

function Login() {
  return (
    <LoginContainer>
      <Box sx={{
        width: "350px"
      }}>
        <Typography textAlign="center" variant="h2">
          Sign in
        </Typography>
        <Typography
          textAlign="center"
          sx={{ margin: "1rem 0" }}
        >
          Sign in and start managing your candidates
        </Typography>
        <Formik
          initialValues={{
            email: "",
            password: "",
            remember: false
          }}
          onSubmit={(values) => { console.log(values); }}
        >
          <Form>
            <Stack direction="column">
              <Input
                label="Email"
                name="email"
                fullWidth
              />
              <Input
                label="Password"
                name="password"
                type="password"
                fullWidth
              />
              <Checkbox
                name="remember"
                label="Remember this computer"
                labelPlacement="end"
              />
              <Button variant="contained" type="submit">
                Login
              </Button>
            </Stack>
          </Form>
        </Formik>
      </Box>
    </LoginContainer>
  );
}

export default Login;