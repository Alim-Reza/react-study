import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom';
import SignUp from './components/user-registration/SignUp';


function RoutesProvider() {
  return(
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<BaseComponent />}  />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
    </>
  );
}
function ListOfComponent({ listOfComponent }) {
  console.log(listOfComponent)
  return (
    <div style={{ display: "flex", justifyContent: "space-between"}}>
      {listOfComponent.map((value, key) => 
      <NavLink to={"/"+ value} style={{textDecoration: "none"}}>
        <p key={key} style={{
          border: "1px solid white",
          color: "white",
          background: "grey",
          borderRadius: "1em",
          padding: "1em",
          margin: "1em"
        }}>
          {value}
        </p>
      </NavLink>
      )}
    </div>
  );
}
function BaseComponent() {
  return (
    <div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> List of components </p>
        <ListOfComponent listOfComponent={["sign-up", "log-in", "forget-password"]}/>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
    </header>
    </div>
  );
}
function App() {
  return (
    <RoutesProvider />
  );
}

export default App;
