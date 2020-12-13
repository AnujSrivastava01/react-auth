import './App.css';
import {BrowserRouter, Route ,Switch} from 'react-router-dom'
import Login from './Login';
import Upload from './Upload';
import AfterUpload from './AfterUpload';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/Upload' component={Upload} />
        <Route exact path='/AfterUpload' component={AfterUpload} />
      </Switch>
    </div>  
    </BrowserRouter>
  );
}

export default App;
