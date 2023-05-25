import CommentsList from "./components/CommentsList";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Users from "./pages/Users.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<></>} />

          <Route path="/users" element={<Users />} />

          <Route path="/users/post" element={<Post />} />

          <Route path="/comments" element={<CommentsList />} />

          <Route path="*" element={<div>Not page</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
