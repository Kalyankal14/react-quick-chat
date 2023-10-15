import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import ChatRoom from "./Pages/ChatRoom";
import Login from "./Pages/Login";
import { PrivateRoute } from "./Routes/PrivateRoute";
import { AuthProvider } from "./Contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="chat"
          element={
            <PrivateRoute>
              <ChatRoom />{" "}
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
