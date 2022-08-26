
import configureStore from "./redux/Store";
import "./App.css";
import Router from "./routes/index";
import { Provider } from "react-redux";
import store from "./redux/Store";


function App() {
  return (
    <Provider store={store}>
    <Router />
    </Provider>
  );
}

export default App;