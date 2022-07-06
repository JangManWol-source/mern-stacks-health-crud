import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CreateData from './components/CreateData';
import UpdateData from './components/UpdateData';
import Footer from './components/Footer';
import Drawer from './components/Drawer';
import { useSelector } from 'react-redux';
function App() {
  const openDrawer = useSelector((state) => state.toggle.openDrawer)
  return (
    <div className="App">
     
      <Router>
      <NavBar />
      {openDrawer && <Drawer />}
        <Switch>
          <Route path={'/'} exact>
          <Main />
          </Route>
          <Route path={'/add/'}>
          <CreateData />
          </Route>
          <Route path={'/update/:id'} component={UpdateData}/>
         
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
