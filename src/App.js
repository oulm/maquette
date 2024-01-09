import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import Profile from "./pages/profile/Profile";
import Chat from "./pages/chat/Chat";

import "./styles/main.css";
const App = () => {
  const isConnected = true;

  return (
    <BrowserRouter>
      <Header isConnected={isConnected} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
