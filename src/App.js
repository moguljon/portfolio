import './sass/main.scss';
import Homepage from './Homepage/Homepage';
import Resume from './components/Resume/Resume';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/resume' component={Resume} />
      </Router>
    </div>
  );
}

export default App;