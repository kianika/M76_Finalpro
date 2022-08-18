
import configureStore from "./store/Store";
import "./App.css";
import Router from "./routes/index";
import { Provider } from "react-redux";

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
    <Router />
    </Provider>
  );
}

export default App;