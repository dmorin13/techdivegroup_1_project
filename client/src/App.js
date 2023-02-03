import './App.css';
import Admin from './Pages/Admin';
import Detail from './Pages/Detail';
import Exam from './Pages/Exam';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
    return (
      <Router>
        
        <div className="App">
            <NavBar />
            
        </div>

        <div className='Content'>
          <Switch>
            <Route path="/admin">
                <Admin />
            </Route>
            <Route path="/details">
                <Detail />
            </Route>
            <Route path="/exam">
                <Exam />
            </Route>
          </Switch>
            
        </div>    
      </Router>
    )

}

export default App;
