import { Routes, Route, Outlet, Link } from "react-router-dom";
import logo from "./assets/logo.png"
import "./App.css"

export default function App() {
  return (
    <div className="intro">
      <img className="logo" src={logo}/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="website/home" element={<Home />} />
          <Route path="website/about" element={<About />} />
          <Route path="website/projects" element={<Projects />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div className="nav">
      <nav>
        <Link to="website/home">Home</Link>
        <Link to="website/about">About</Link>
        <Link to="website/projects">Projects</Link>
        <Link to="website/nothing-here">Nothing Here</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here.</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
