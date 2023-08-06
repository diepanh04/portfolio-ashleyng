import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Homepage from './components/Homepage';
import ExperienceDetails from "./components/ExperienceDetails";
import AboutDetails from './components/AboutDetails';
import ProjectContainer from "./components/Projects/ProjectContainer";
import Introduction from './components/About Me/Introduction';
import ActivityContainer from './components/Activity/ActivityContainer';
import ContactInfo from './components/ContactInfo';
import './index.css';
import logo from './assets/images/logo.png';

function App() {
  const cardStyle = {
    marginTop: '20%',
    zIndex: 1,
  };
  const expStyle = {
    marginTop: '30%',
    zIndex: 1,
  }
  const projStyle = {
    marginTop: '30%',
    zIndex: 1,
  }

  return (
    <div style={{ background: '#fafafa' }}>
      <Router>
        <NavBar>
          <Routes>
            <Route path="/portfolio-ashleyng" element={<Homepage />} />
            <Route path='/about' element={<AboutDetails />} />
            <Route path='/experience' element={<ExperienceDetails />} />
            <Route path='/projects/podcasity' element={<ProjectContainer />} />
            <Route path='/activity' element={<ActivityContainer />} />
          </Routes>
        </NavBar>
      </Router>
    </div>
  );
}

export default App;
