import Routes from "./routes";
import { ThemeProvider, Box } from "@mui/material";
import AppTheme from "./core/theme";
import { connect } from "react-redux";
import IState from "./shared/utilities/interfaces";

interface IAppProps {
  themeMode: boolean;
}

function App(props: IAppProps) {
  return (
    <ThemeProvider theme={AppTheme(props.themeMode)}>
      <Box sx={{ bg: "secondary.main", minHeight: "100vh" }}>
        <Routes />
      </Box>
    </ThemeProvider>
  );
}

export default connect((state: IState) => ({
  themeMode: state.core.themeMode
}))(App);
