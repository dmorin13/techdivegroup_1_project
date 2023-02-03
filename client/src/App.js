import './App.css';
import Admin from './Pages/Admin';
import Detail from './Pages/Detail';
import Exam from './Pages/Exam';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {

  const [ patient, setPatient ] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
        const res = await fetch(`https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams`);
        const data = await res.json();
        //console.log(data.exams[0])
        setPatient(data.exams);
    }       
    fetchData();
}, []);


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
            <Route path="/exams">
                <Exam exams={patient} />
            </Route>
          </Switch>
            
        </div>    
      </Router>
    )

}

export default App;
