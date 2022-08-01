import { IconButton, Typography, Link } from "@mui/material"
import { Box, styled } from "@mui/system"
import { connect } from "react-redux"
import BedtimeIcon from "@mui/icons-material/Bedtime"
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh"

import Content from "../components/content"
import { toggleAppTheme } from "../../../core/store/actions"
import IState from "../../../shared/utilities/interfaces"

interface IHomePage {
	themeMode: boolean
	toggleTheme: () => void
}

const ThemeButton = styled(IconButton)(({ theme }) => ({
	position: "fixed",
	right: 0,
	bottom: 0,
	marginRight: theme.spacing(5),
	marginBottom: theme.spacing(5)
}))

const HomeContainer = styled(Box)(({ theme }) => ({
	background: theme.palette.myColors.bgColor
}))

function HomePage(props: IHomePage) {
	const { themeMode, toggleTheme } = props
	return (
		<HomeContainer>
			<Content />
			<Typography
				variant="body1"
				sx={{ color: "myColors.subColor" }}
				align="center"
			>
				More features soon!
			</Typography>
			<Typography
				variant="h6"
				sx={{
					color: "myColors.textColor"
				}}
				align="center"
			>
				Made with ❤️ by&nbsp;
				<Link href="https://github.com/yashgkar" target="_blank">
					yashgkar
				</Link>
			</Typography>
			<ThemeButton onClick={toggleTheme} size="large">
				{themeMode
					? <BedtimeIcon fontSize="inherit" />
					: <BrightnessHighIcon fontSize="inherit" color="primary" />}
			</ThemeButton>
		</HomeContainer>
	)
}

export default connect((state: IState) => ({
	themeMode: state.core.themeMode
}), {
	toggleTheme: toggleAppTheme
})(HomePage)
