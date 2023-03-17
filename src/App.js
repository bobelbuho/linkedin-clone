import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";


function App(){
  return (
    <div className="App">
      <Router>
          <Route exact path="/">
            <Login />
          </Route>
      </Router>
    </div>
  )
}


export default App; 
