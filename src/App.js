import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './components/HomePage';
import WorkoutPage from './components/WorkoutPage';
import './App.css';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/workout" element={<WorkoutPage />} />
          </Routes>
      </Router>
  );
}

export default App;
