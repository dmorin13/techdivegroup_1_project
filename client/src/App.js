import './App.css';
import Admin from './Pages/Admin';
import Detail from './Pages/Detail';
import Exam from './Pages/Exam';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreatePatient from './Components/CreatePatient';
import EditPatient from './Components/EditPatient';


function App() {
           
  const [ patient, setPatient ] = useState([]); //{}
 
  useEffect(() => {
    const fetchData = async () => {
      //Fetches Api data
        const response = await fetch(`https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams`); 
        //JSON object
        const data = await response.json();
        //setting patient state to 
        //console.log("API DATA:", data)
        if(response.ok) setPatient(data.exams);
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
          <Route path="/">
                <Exam exams={patient} />
            </Route>
            <Route path="/admin" >
                <Admin exams={patient} />
            </Route>
            {/* <Route path="/details/:id"> */}
            <Route path="/details/:id">
                <Detail exams={patient} />
            </Route>
            
            <Route path="/create">
                <CreatePatient />
            </Route>
            <Route path="/edit/:id">
                <EditPatient />
            </Route>
          </Switch>  
        </div>  

      </Router>
    )

}

export default App;
