import { red, blue } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
    secondary: {
      light: red[300],
      main: red[500],
      dark: red[700],
    },
  },
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiButton: {
      label: {
        textTransform: "none",
      },
      root: {
        textTransform: "none",
      },
    },
    MuiTypography: {
      body2: {
        fontSize: "16px",
      },
      subheading: {
        fontSize: "18px",
      },
    },
  },
})

export default theme
