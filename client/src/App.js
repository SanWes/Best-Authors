import './App.css';
import AllAuthors from './components/AllAuthors';
import EditAuthor from './components/EditAuthor';
import NewAuthorForm from './components/NewAuthorForm';


import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar';


function App() {


  return (
    <BrowserRouter> 
    <div className="App container">
      
      <NavBar/>

      <Switch>

<Route exact path="/">
  <AllAuthors   />
</Route>

<Route exact path="/new">
  <NewAuthorForm   />
</Route>

<Route exact path="/authors/edit/:idAuth">
  <EditAuthor/>
</Route>


<Route exact path="/delete/:id">
  
</Route>


    </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
