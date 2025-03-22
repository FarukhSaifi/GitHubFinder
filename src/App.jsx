import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Alert from "./Components/layouts/Alert.jsx";
import Home from "./Components/layouts/Home.jsx";
import Layout from "./Components/layouts/Layout.jsx";
import AlertState from "./context/alert/AlertState.jsx";
import GithubState from "./context/github/GithubState.jsx";
import About from "./pages/About.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NotFound from "./pages/NotFound.jsx";
import Profile from "./pages/Profile.jsx";

// import "./App.css";

function App() {
  return (
    <>
      <GithubState>
        <AlertState>
          <Router>
            {/* <AppNavbar /> */}
            <Alert />

            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="profile/:username" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Router>
        </AlertState>
      </GithubState>
    </>
  );
}

export default App;
