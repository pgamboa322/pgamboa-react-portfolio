import './App.css';
import MyNav from './Components/My-Nav/MyNav';
import { Route, Switch } from 'react-router-dom';
// import Overview from './Components/Overview/Overview';
// import AboutSection from './Components/About-Section/AboutSection';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
      <MyNav/>
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
            
       </Switch>
    
    </div>
  );
}

export default App;
