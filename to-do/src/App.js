import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SıgnIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
/* 
<Route
            path="/home"
            element={
              <ProtectedRoute>
                <MainPage />
              </ProtectedRoute>
            }
          />*/
