import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import SignIn from "./components/SıgnIn";
import SignUp from "./components/SignUp";
import CardList from "./components/CardList";
import ToDoForm from "./components/ToDoForm";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <MainPage />
            </div>
          }
        />
        <Route
          exact
          path="/signup"
          element={
            <div>
              <SignUp />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
