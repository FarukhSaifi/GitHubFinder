import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Alert from "./Components/layouts/Alert.jsx";
import Home from "./Components/layouts/Home.jsx";
import Layout from "./Components/layouts/Layout.jsx";
import { LoadingSpinner } from "./Components/ui/LoadingSpinner.jsx";
import AlertState from "./context/alert/AlertState.jsx";
import GithubState from "./context/github/GithubState.jsx";

const About = lazy(() => import("./pages/About.jsx"));
const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));
const Profile = lazy(() => import("./pages/Profile.jsx"));

// import "./App.css";

function App() {
  return (
    <>
      <GithubState>
        <AlertState>
          <Router>
            {/* <AppNavbar /> */}
            <Alert />

            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="profile/:username" element={<Profile />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </Suspense>
          </Router>
        </AlertState>
      </GithubState>
    </>
  );
}

export default App;
