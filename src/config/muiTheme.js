import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-iu/core/colors/blue";

export default createMuiTheme({
  palette: {
    primary: blue
  },
  typography: {
    h1: {
      fonSize: 28,
      fontWeight: 300
    }
  }
})
