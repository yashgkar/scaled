
import { Stack, Typography, Link, Button } from "@mui/material";
import { styled, Box } from "@mui/system";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Input from "../../../../shared/components/Input";
import LOGO from "../../../../logo.svg";
import "./animation.css";
import Select from "../../../../shared/components/Select";

const ContentContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center"
}));

function Content() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
    gender: Yup.string().required()
  });

  const links = [{
    link: "https://formik.org/",
    name: "Formik"
  }, {
    link: "https://mui.com/",
    name: "Material UI"
  }, {
    link: "https://react-redux.js.org/",
    name: "React Redux"
  }, {
    link: "https://www.npmjs.com/package/react-helmet",
    name: "React-Helmet"
  }, {
    link: "https://reactrouter.com/docs/en/v6/getting-started/overview",
    name: "React Router V6"
  }, {
    link: "https://github.com/reduxjs/redux-thunk",
    name: "Redux-thunk"
  }, {
    link: "https://www.typescriptlang.org/",
    name: "TypeScript"
  }];

  return (
    <ContentContainer>
      <Stack sx={{
        width: "80%"
      }} alignItems="center">
        <img src={LOGO} alt="react-logo" className="App-logo" />
        <Typography
          variant="h3"
          sx={{ mt: 3, color: "myColors.textColor" }}
        >
          Welcome to Scaled React app!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: 2,
            color: "myColors.subColor"
          }}
        >
          Scaled React CRA template includes following libraries
          for a scaled react boilerplate to get started with
          your project out of the box.
        </Typography>
        <Stack direction="row" sx={{ mt: 2, mb: 2 }}>
          {links.map(link => (
            <Box
              sx={{ display: "inline" }}
              key={link.name}
            >
              <Link
                href={link.link}
                target="_blank"
              >
                {link.name}
              </Link>&nbsp;
            </Box>
          ))}
        </Stack>
        <Box>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              color: "myColors.subColor"
            }}
          >
            This CRA-template gives you multiple features to use out
            of the box.
            <br />
            The boilerplate includes a redux configured app, formik,
            a scalable folder structure, ts-lint enabled code
            formatting, app theme which can be toggled between light
            and dark mode, react-router which is configured with the
            latest v6, auth and router helpers to query data from
            localStorage and URL params and Lazy Loading of routes
            using React Suspense.
            <br />
            To make sure the code standards are up to your
            expectations all you have to do is update the
            <Link
              href="https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#:~:text=The%20tsconfig.,compiler%20flags%20enabled%20by%20default."
              target="_blank"
            >
              tsconfig.json
            </Link> file.
            <br />
            For eg: Formik form fields need customization is a tedious
            and time consuming task. Input component in the shared
            folder gives you this field that can be directly used in
            a formik form. It takes context from formik to interact
            with formiks' internal state.
            <br />
            You can test this form below.
          </Typography>
        </Box>
        <Box sx={{ m: 3 }}>
          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            validationSchema={validationSchema}
            enableReinitialize
            onSubmit={data => alert(JSON.stringify(data))}
            validateOnBlur
          >
            {({ setFieldValue, touched }) => (
              <Form>
                <Input
                  label="Email"
                  name="email"
                />
                <Input
                  label="Password"
                  name="password"
                  type="password"
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
                {console.log(touched)}
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Form>
            )}

          </Formik>
        </Box>
      </Stack>
    </ContentContainer>
  );
}

export default Content;