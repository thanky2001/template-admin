
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import './App.css';
import Index from './pages/Admin/Index';
function App() {
  return (
    <Router >
        <Switch>
          <Route path="/admin" component={Index} />
        </Switch>
    </Router>
  );
}

export default App;
