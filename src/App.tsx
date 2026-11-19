import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Homepage";
import SettingsPage from "./pages/SettingsPage";
import ChatPage from "./pages/ChatPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}