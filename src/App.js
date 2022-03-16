import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import { createStore } from "redux";
import { Provider } from "react-redux";
import userReducer from "./store/userReducer";

const store = createStore(userReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<NotFound />} />
          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
