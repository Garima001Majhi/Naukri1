import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import JobList from './components/JobList';
import JobSearch from './pages/JobSearch/JobSearch';
import './App.css'; 
import Signup from './components/Signup';
import Login from './components/Login';
import { Provider } from 'react-redux';
import store from './redux/store'; 

function App() {
  return (
    <Provider store={store}>  {/* Redux provider wraps the entire app */}
      <Router>  {/* Router wraps the parts that will need routing */}
        <div className="App">
          <Navbar /> {/* Navbar component */}
          <main>
            <Routes>
              <Route path="/" element={<JobSearch />} />
              <Route path="/jobs" element={<JobList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
