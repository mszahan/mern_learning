import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";

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
    </Routes>
  );
}

export default App;
