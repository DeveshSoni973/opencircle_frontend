
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Homepage";
import SettingsPage from "./pages/SettingsPage";
import ChatPage from "./pages/ChatPage";
import EmptyState from "./pages/EmptyState";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<EmptyState />} />
          <Route path="chat/:chatId" element={<ChatPage />} />
        </Route>

        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
