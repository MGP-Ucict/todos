import {BrowserRouter, Router, Route, Link} from 'react-router-dom';
import {Switch} from 'react-router'; 
import './App.css';
import { createBrowserHistory } from 'history';
import CreateTodo from './components/CreateTodo';
import ListTodo from './components/ListTodo';
function App() {
	const newHistory = createBrowserHistory();
  return (
    <div className="App">
      <h5>React CRD operations using PHP API and MySQL</h5>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">List Todos</Link>
            </li>
            <li>
              <Link to="/todo/create">Create Todo</Link>
            </li>
          </ul>
        </nav>
        <Router  history={newHistory}>
			<Switch>
				<Route path="/" component={ListTodo}/>
				<Route path="/todo/create" component={CreateTodo}/>           
			</Switch>
		</Router>
      </BrowserRouter>
    </div>
  );
}
export default App;
