import { ThemeProvider, Box } from "@mui/material"
import { connect } from "react-redux"
import { I18nextProvider, initReactI18next } from "react-i18next"
import i18next from "i18next"
import { Suspense } from "react"

import IState from "./shared/utilities/interfaces"
import AppTheme from "./core/theme"
import Routes from "./routes"
import en from "./i18next/en.json"

interface IAppProps {
	themeMode: boolean
}

i18next
	.use(initReactI18next)
	.init({
		resources: {
			en: {
				translation: en
			}
		},
		lng: "en",
		fallbackLng: "en",
		interpolation: { escapeValue: false },
		keySeparator: "."
	})

function App(props: IAppProps) {
	const { themeMode } = props
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<I18nextProvider i18n={i18next}>
				<ThemeProvider theme={AppTheme(themeMode)}>
					<Box sx={{ bg: "secondary.main", minHeight: "100vh" }}>
						<Routes />
					</Box>
				</ThemeProvider>
			</I18nextProvider>
		</Suspense>
	)
}

export default connect((state: IState) => ({
	themeMode: state.core.themeMode
}))(App)
