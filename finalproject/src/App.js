
import "./App.css";
import Router from "./routes/index";
import { Provider } from "react-redux";
import store from "./redux/Store";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./styles/theme";



function App() {
  return (
    <ThemeProvider theme={theme}>
    <Provider store={store}>
    <Router />
    </Provider>
    </ThemeProvider>
  );
}

export default App;