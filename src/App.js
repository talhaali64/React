import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Search from './components/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Edit from './components/Edit';
import { withRouter } from "react-router";
const HeaderWithRouter = withRouter(Header);

function App() {

  return (
    <>
      <HeaderWithRouter/>
        <Switch>                
                   
       <Route path='/edit' component={Edit}/> 
       <Route path='/search/:id' component={Search}/>  
       
       <Route path='/search' component={Search}/>   
       <Route path='/about' component={About}/>

    </Switch>

     <Footer/>
    </>
        

  );
}


export default App;
