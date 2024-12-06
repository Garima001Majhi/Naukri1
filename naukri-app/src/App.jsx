import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import JobList from './components/JobList';
import JobSearch from './pages/JobSearch/JobSearch';
import './App.css';  // Assuming you're using App.css for styling

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar component */}
        <main>
          <Routes>
            <Route path="/" element={<JobSearch />} />
            <Route path="/jobs" element={<JobList />} />
            {/* Add other routes for different sections like Companies, Login, etc. */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
