import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <p>Homepage</p>
          </Layout>
        }
      />
      <Route
        path="/register"
        element={
          <Layout>
            <Register />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
